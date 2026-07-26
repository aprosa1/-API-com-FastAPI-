# ThreePy Foundation: Normative Principles

## The Eight Principles

Every conformant ThreePy implementation SHALL respect these normative principles:

---

### Principle 1: Architecture First

**"The architecture constitutes the source of truth. No implementation can redefine the architectural model established by the Foundation."**

- The Foundation is the canonical definition of ThreePy architecture
- RFCs formalize this architecture through specifications
- Implementations must conform to the architecture, not the reverse
- Architectural changes flow from Foundation → RFCs → Implementations
- No implementation can create architectural divergence

**Implication**: An implementation that violates the Foundation is not ThreePy, regardless of how useful it might be.

---

### Principle 2: Specification Before Implementation

**"The specification precedes any implementation. RFCs define normative contracts that guide runtime, adapter, and tool development."**

- Specifications (RFCs) are written before implementation begins
- Specifications establish contracts that implementations must honor
- Specifications are reference points for validation and conformance
- Implementation details may vary; architectural contracts must not

**Implication**: You write the RFC first, then build the runtime. Never the other way around.

---

### Principle 3: Executable Architecture

**"The architecture must be interpretable in a deterministic way. The Architecture Engine transforms the specification into a Runtime Model that preserves the contracts defined by RFCs."**

- The Architecture Engine is the canonical interpreter of RFCs
- The output is the Runtime Model — a deterministic representation of the architecture
- The Runtime Model is verifiable and testable
- Any deviation from the Runtime Model is a deviation from the architecture

**Implication**: Architecture is not just theory; it is executable and validatable.

---

### Principle 4: Runtime Independence

**"The architectural model is independent of the technology used to execute it. Implementations in Python, Rust, C++, WebAssembly, or other languages are equivalent if they comply with the specification."**

- No single language "owns" the specification
- No single platform is the "canonical" implementation
- Equivalence is defined by specification conformance, not technological similarity
- Performance characteristics may vary; architectural behavior must not

**Implication**: The specification is language-agnostic and platform-agnostic.

---

### Principle 5: Persistent Cognitive Universe

**"The fundamental state of the system is the Persistent Cognitive Universe. Rendering, visualization, and interfaces are projections of this state, not its canonical representation."**

- The Cognitive Universe is the source of truth for state
- All projections observe and interact with this universe
- Multiple projections can view the same state simultaneously
- Changes to the universe flow through all projections consistently

**Implication**: The universe is not what you see on screen; the screen is what you see of the universe.

---

### Principle 6: Projection Independence

**"Projection APIs do not alter the Cognitive Universe. They represent or enable interaction with the same computational state through different technologies."**

- Projection APIs are passive observers or directed actors
- The universe's state is unaffected by which projection is used
- Multiple projections can coexist and share state
- Adding or removing a projection does not alter the universe

**Implication**: The web interface, the REST API, and the CLI are all viewing and controlling the same underlying reality.

---

### Principle 7: Evolution Through Specification

**"The evolution of the ecosystem occurs through evolution of the Foundation and RFCs. Implementations evolve to follow the specification, never the reverse."**

- Architectural changes are formal (RFC process)
- The RFC process includes review, discussion, and consensus
- All changes are documented and versioned
- Implementations update to match new specifications

**Implication**: The specification drives evolution, not the other way around.

---

### Principle 8: Conformance

**"An implementation is only considered ThreePy Compatible when it demonstrates conformance with the Foundation, normative contracts, and conformance tests defined by the specification."**

- Conformance is measurable and testable
- A Conformance Suite validates implementations
- Profiles define which RFCs are required for which use cases
- Non-conformant implementations are not ThreePy

**Implication**: You can verify that your runtime actually implements the specification correctly.

---

## The Principle Hierarchy

These principles form a hierarchy:

```
Principle 1: Architecture First
            │
            ├─→ Principle 2: Specification Before Implementation
            │   │
            │   ├─→ Principle 3: Executable Architecture
            │   │   │
            │   │   ├─→ Principle 4: Runtime Independence
            │   │
            │   └─→ Principle 8: Conformance
            │
            ├─→ Principle 5: Persistent Cognitive Universe
            │   │
            │   ├─→ Principle 6: Projection Independence
            │   │
            │   └─→ Principle 7: Evolution Through Specification
```

The first principle (Architecture First) is foundational. All others depend on it.

---

## Principle Application Examples

### Example 1: Adding a New Feature

❌ **Wrong**: "Our implementation supports X. Let's call it ThreePy."  
✓ **Right**: "We propose RFC-011 for feature X. Once approved and formalized, we implement it."

**Applies**: Principle 2 (Specification Before Implementation)

---

### Example 2: Choosing a Technology

❌ **Wrong**: "We rewrote ThreePy in Java because it's faster."  
✓ **Right**: "We implemented a Java runtime that conforms to the specification."

**Applies**: Principle 4 (Runtime Independence)

---

### Example 3: Rendering the Universe

❌ **Wrong**: "Save the 3D scene and that's our state."  
✓ **Right**: "The 3D scene is a projection of the persistent universe. Save the universe."

**Applies**: Principle 5 (Persistent Cognitive Universe)

---

### Example 4: Changing the API

❌ **Wrong**: "The REST API is outdated. Let's change the universe structure."  
✓ **Right**: "We'll add a GraphQL projection API. The universe structure remains unchanged."

**Applies**: Principle 6 (Projection Independence)

---

### Example 5: Discovering a Bug

❌ **Wrong**: "Our implementation has a bug, but fixing it breaks compatibility. We'll leave it."  
✓ **Right**: "We file an RFC to clarify the specification, then fix both the spec and all implementations."

**Applies**: Principle 7 (Evolution Through Specification)

---

### Example 6: Validating Implementation

❌ **Wrong**: "It works for us, so it's ThreePy."  
✓ **Right**: "We run the Conformance Suite and pass all required tests for our profile."

**Applies**: Principle 8 (Conformance)

---

## Principle Violations: Consequences

### Violation of Principle 1
**Consequence**: The implementation is not ThreePy. It's a fork.

### Violation of Principle 2
**Consequence**: The implementation may be useful but doesn't advance the ecosystem. Others won't know what you're trying to do.

### Violation of Principle 3
**Consequence**: The architecture becomes subjective and unverifiable. Fragmentation follows.

### Violation of Principle 4
**Consequence**: Vendor lock-in returns. The ecosystem loses its independence advantage.

### Violation of Principle 5
**Consequence**: State becomes fragmented across projections. Consistency breaks.

### Violation of Principle 6
**Consequence**: Adding a new UI requires architectural changes. Complexity explodes.

### Violation of Principle 7
**Consequence**: Evolution becomes chaotic. Implementations diverge. Interoperability fails.

### Violation of Principle 8
**Consequence**: You can't tell if your implementation is actually correct. Bugs compound.

---

## Using These Principles

When faced with a design decision:

1. **Identify which principles apply**
2. **Understand the hierarchy** (Principle 1 overrides others if conflict)
3. **Apply the principles consistently**
4. **Document your reasoning**
5. **Propose RFCs if principles require changes**

---

## Principle Evolution

These principles are part of the Foundation and are **immutable for the current specification version**.

However, they can be:
- **Clarified** through RFC process
- **Extended** by adding new principles (creating a new version)
- **Never violated** in the current version

To propose changes to these principles, create an RFC that:
1. Clearly identifies which principle(s) are affected
2. Justifies why change is needed
3. Proposes new principle language
4. Explains backward compatibility implications

---

## Next Steps

- Study **[The Architectural Asset](./the-asset.md)** for context
- Review **[RFC-000: The Thesis](../rfcs/RFC-000-thesis.md)** for formal specifications
- Explore specific RFCs in **[rfcs/](../rfcs/)** for detailed requirements
