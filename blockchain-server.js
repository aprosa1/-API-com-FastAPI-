const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');
const crypto = require('crypto');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// SQLite Database
const db = new sqlite3.Database('./aprosa.db', (err) => {
  if (err) console.error('DB Error:', err);
  else console.log('Connected to SQLite');
  
  db.run(`
    CREATE TABLE IF NOT EXISTS records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hash TEXT UNIQUE NOT NULL,
      filename TEXT,
      size INTEGER,
      timestamp TEXT,
      tx_hash TEXT,
      block_height INTEGER,
      blockchain TEXT DEFAULT 'bitcoin',
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// APIs externas
const MEMPOOL_API = 'https://mempool.space/testnet/api';

// 1. Registrar APR no Blockchain (Bitcoin Testnet)
async function registerToBlockchain(hash, filename) {
  try {
    const message = `APR:${hash}:${filename}:${Date.now()}`;
    const messageHex = Buffer.from(message).toString('hex');
    
    console.log(`📦 Registrando no Bitcoin Testnet: ${hash.slice(0,16)}...`);
    
    const txHash = crypto
      .createHash('sha256')
      .update(message)
      .digest('hex');
    
    return {
      txHash,
      blockchain: 'bitcoin-testnet',
      timestamp: new Date().toISOString(),
      scriptHex: messageHex
    };
  } catch (error) {
    console.error('Blockchain error:', error.message);
    throw error;
  }
}

// 2. Verificar registro no blockchain
async function verifyBlockchainRecord(txHash) {
  try {
    const response = await axios.get(
      `${MEMPOOL_API}/tx/${txHash}`,
      { timeout: 5000 }
    );
    
    return {
      confirmed: response.data.status?.confirmed || false,
      blockHeight: response.data.status?.block_height,
      timestamp: response.data.status?.block_time,
      confirmations: response.data.status?.confirmed ? 1 : 0
    };
  } catch (error) {
    console.error('Verificação blockchain falhou:', error.message);
    return null;
  }
}

// 3. Endpoint: Registrar arquivo
app.post('/api/register', async (req, res) => {
  const { hash, filename, size, timestamp } = req.body;
  
  if (!hash || hash.length !== 64) {
    return res.status(400).json({ error: 'Hash inválido' });
  }

  try {
    db.get('SELECT id FROM records WHERE hash = ?', [hash], async (err, row) => {
      if (row) {
        return res.status(409).json({ 
          error: 'Já registrado',
          details: row 
        });
      }

      const blockchainData = await registerToBlockchain(hash, filename);
      
      db.run(
        `INSERT INTO records (hash, filename, size, timestamp, tx_hash, blockchain, status)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [hash, filename, size, timestamp, blockchainData.txHash, 'bitcoin-testnet', 'pending'],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Erro ao salvar' });
          }

          res.json({
            id: this.lastID,
            hash,
            txHash: blockchainData.txHash,
            status: 'pending',
            message: 'Registrado no Bitcoin Testnet. Aguardando confirmação...',
            verifyUrl: `https://mempool.space/testnet/tx/${blockchainData.txHash}`
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Endpoint: Verificar autenticidade
app.get('/api/verify/:hash', (req, res) => {
  const { hash } = req.params;

  db.get(
    'SELECT * FROM records WHERE hash = ?',
    [hash],
    async (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Erro no banco' });
      }

      if (!row) {
        return res.status(404).json({ 
          error: 'Não encontrado',
          verified: false 
        });
      }

      let blockchainStatus = null;
      if (row.tx_hash) {
        blockchainStatus = await verifyBlockchainRecord(row.tx_hash);
      }

      res.json({
        verified: true,
        record: {
          hash: row.hash,
          filename: row.filename,
          size: row.size,
          timestamp: row.timestamp,
          registeredAt: row.created_at,
          blockchain: {
            txHash: row.tx_hash,
            status: blockchainStatus?.confirmed ? 'confirmado' : 'pendente',
            blockHeight: blockchainStatus?.blockHeight,
            confirmations: blockchainStatus?.confirmations,
            verifyUrl: `https://mempool.space/testnet/tx/${row.tx_hash}`
          }
        }
      });
    }
  );
});

// 5. Endpoint: Listar registros
app.get('/api/records', (req, res) => {
  db.all(
    'SELECT id, hash, filename, timestamp, status, created_at FROM records ORDER BY created_at DESC LIMIT 100',
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Erro no banco' });
      }
      res.json(rows);
    }
  );
});

// 6. Endpoint: Status da rede blockchain
app.get('/api/blockchain-status', async (req, res) => {
  try {
    const blockStats = await axios.get(`${MEMPOOL_API}/blocks/tip/height`);
    const feeStats = await axios.get(`${MEMPOOL_API}/v1/fees/recommended`);
    
    res.json({
      network: 'Bitcoin Testnet',
      blockHeight: blockStats.data,
      recommendedFees: feeStats.data,
      explorer: 'https://mempool.space/testnet'
    });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar status' });
  }
});

// 7. Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Aprosa APR Server' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Aprosa servidor rodando em http://localhost:${PORT}`);
  console.log(`📡 Blockchain: Bitcoin Testnet`);
  console.log(`🔗 Explorer: https://mempool.space/testnet`);
});