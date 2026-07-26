# ThreePy
## An Open Specification for Cognitive Spatial Computing

ThreePy is an open specification for **Cognitive Spatial Computing**. Its identity resides in the architecture, expressed through the Foundation and formalized by RFCs. The Architecture Engine transforms that specification into an executable architectural model; the Architectural Virtual Machine represents that model; the MetaKernel orchestrates its execution; the Universal Cognitive Runtime materializes the Cognitive Universe; and the Projection APIs make that universe accessible across different technologies and platforms.

### The Core Principle

**Architecture Defines. Runtime Executes. Projection Reveals.**

---

## The Architectural Hierarchy

```
                     FOUNDATION
         (Vision • RFCs • Formal Models • Governance)
                           │
                           ▼
                ARCHITECTURE ENGINE
       (Architectural Compiler and Validator)
                           │
                           ▼
          ARCHITECTURAL VIRTUAL MACHINE
          (Architecture Graph • Runtime Model)
                           │
                           ▼
                     METAKERNEL
     (Lifecycle • Discovery • Compatibility • Federation)
                           │
                           ▼
            UNIVERSAL COGNITIVE RUNTIME
 (Cognitive Kernel • Event Bus • Timeline • Memory • Agents)
                           │
                           ▼
             SPATIAL COGNITIVE UNIVERSE
 (Spatial Cognitive Entities • Relations • Knowledge Graph)
                           │
                           ▼
                  PROJECTION APIS
(HTML5 • Three.js • WebGPU • WebXR • REST • MQTT • CLI)
```

---

## Repository Structure

```
threepy/
├── foundation/                    # ThreePy Foundation (normative)
│   ├── vision.md                 # Core vision statement
│   ├── principles.md             # Fundamental principles
│   ├── formal-models/            # Formal mathematical models
│   └── governance.md             # Governance and process
│
├── rfcs/                         # Request for Comments (specifications)
│   ├── RFC-000-thesis.md         # The ThreePy Thesis
│   ├── RFC-001-architecture.md   # Architecture formalization
│   ├── RFC-002-cognitive-model.md
│   └── templates/
│       └── RFC-template.md       # Template for new RFCs
│
├── conformance/                  # Conformance and validation
│   ├── test-suite/              # Conformance test suite
│   ├── profiles/                # Implementation profiles
│   └── validation/              # Validation tools
│
├── implementations/             # Reference implementations
│   ├── python/                  # Python reference runtime
│   ├── rust/                    # Rust reference runtime
│   └── webassembly/             # WASM runtime
│
├── documentation/               # Extended documentation
│   ├── architecture/            # Architectural deep-dives
│   ├── getting-started/         # Implementation guides
│   └── examples/                # Example implementations
│
├── tools/                       # Development tools
│   ├── architecture-engine/     # RFC compiler and validator
│   ├── validator/               # Conformance validator
│   └── cli/                     # CLI tools
│
└── CONTRIBUTING.md              # Contribution guidelines
```

---

## The Seven Pillars of ThreePy

### 1. **Foundation**
The normative core of the ecosystem. Contains formal definitions, principles, RFCs, formal models, conformance rules, and governance. The DNA of the ecosystem.

### 2. **Architecture Engine**
The architectural compiler. Interprets RFCs, resolves dependencies, validates consistency, generates contracts, produces the Architecture Graph, and generates the Runtime Model.

### 3. **Architectural Virtual Machine**
Executes an architectural model rather than instructions. Represents the complete architectural state of the system before operational execution.

### 4. **MetaKernel**
The ecosystem orchestrator. Interprets the Runtime Model produced by the Architecture Engine. Manages plugin discovery, capability negotiation, version management, runtime conformance, interoperability, and federation.

### 5. **Universal Cognitive Runtime**
The environment where the Cognitive Universe exists. Contains the Cognitive Kernel, memory, events, agents, Digital Twins, Timeline, and Knowledge Graph.

### 6. **Spatial Cognitive Universe**
The true domain of ThreePy. Manages persistent cognitive entities with identity, state, behavior, context, relations, and temporal evolution. 3D visualization is only one possible projection.

### 7. **Projection APIs**
Technologies become mere ways to observe or interact with the Cognitive Universe. Same architecture can project to browsers, AR, VR, desktop, IoT, REST, CLI, embedded runtimes.

---

## Normative Principles

Every conformant ThreePy implementation SHALL respect:

1. **Architecture First** — Architecture is the primary source of truth
2. **Specification Before Implementation** — RFCs precede runtime development
3. **Executable Architecture** — Architecture must be deterministically interpretable
4. **Runtime Independence** — Architecture is independent of implementation technology
5. **Persistent Cognitive Universe** — Fundamental state is persistent, 3D rendering is a projection
6. **Projection Independence** — Projection APIs don't alter the Cognitive Universe
7. **Evolution Through Specification** — Evolution occurs through Foundation and RFC evolution
8. **Conformance** — Only demonstrably conformant implementations are ThreePy Compatible

---

## The Fundamental Asset

> **Architecture is the Asset. Specifications are the Contract. Implementations are Evidence.**

The true asset of ThreePy is not a language, graphics engine, or specific runtime. It is the architectural specification capable of surviving technological evolution and ensuring that distinct implementations remain interoperable and coherent over time.

---

## Getting Started

- **[Foundation Vision](./foundation/vision.md)** — Start here to understand the core vision
- **[RFC-000: The ThreePy Thesis](./rfcs/RFC-000-thesis.md)** — The foundational specification
- **[Contributing](./CONTRIBUTING.md)** — How to contribute to ThreePy

---

## Status

🔨 **Early Specification Phase** — Foundation and RFC-000 currently in development

---

## License

This specification is open and unencumbered. See LICENSE for details.
