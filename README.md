# Swarm Router

**16 parallel execution patterns for Claude Code. Auto-detection. Oracle pre-flight. No extra cost.**

## Quick Start

1. Copy the contents of `ROUTER.md` into Claude Code
2. Describe what you want to accomplish
3. Router analyzes, recommends pattern, and executes

## What This Does

Instead of a one-size-fits-all approach, Swarm Router analyzes your query and selects the optimal execution pattern from 16 options:

| Your Query | Pattern | What Happens |
|------------|---------|--------------|
| "Should I sell my company?" | DEBATE | 5 argue FOR, 5 AGAINST, 1 judges |
| "Stakeholder vote on feature" | PARLIAMENT | Constituencies vote with amendments |
| "Is my architecture secure?" | ADVERSARIAL | 10 attackers find vulnerabilities |
| "Patrol my codebase" | IMMUNE | Antibody agents hunt problems |
| "Harden this system" | RED/BLUE | Iterative attack-defend cycles |
| "Teach me Kubernetes" | TREE | Hierarchical knowledge map |
| "Why won't my code work?" | FRACTAL | Recursive root cause analysis |
| "Write a viral post" | PIPELINE | Generate → Score → Refine → Polish |
| "Brainstorm startup ideas" | CRYSTALLIZATION | Chaos → Cluster → Crystallize |
| "Plan my Japan trip" | NETWORK | Specialists collaborate |
| "Revenue projections" | MONTE CARLO | 20 parallel scenarios |
| "Estimate market size" | CONSENSUS | Delphi method convergence |
| "Map the CRM market" | GRID | 5×5 matrix analysis |
| "Future of AI consulting" | TIME-SERIES | Past → Present → Future |
| "Model market competition" | ECOSYSTEM | Species compete and evolve |
| "Will users like my app?" | PERSONA | 10 user types evaluate |
| "Find best project for me" | CONSTRAINT | Multi-criteria optimization |
| "Design optimal pricing" | EVOLUTIONARY | Breed → Mutate → Select |
| "Allocate my budget" | AUCTION | Options bid for resources |

## All Patterns

### Core Patterns (10)

| Pattern | Agents | Best For | Command |
|---------|--------|----------|---------|
| DEBATE | 11 | Decisions with trade-offs | `/debate` |
| ADVERSARIAL | 16+ | Security, finding flaws | `/adversarial` |
| TREE | 5→25 | Learning, deep research | `/tree` |
| PIPELINE | 10→3→1 | Content creation | `/pipeline` |
| NETWORK | 5-10 | Complex planning | `/network` |
| MONTE CARLO | 20+ | Forecasting, risk | `/montecarlo` |
| GRID | N×M | Market analysis | `/grid` |
| TIME-SERIES | 50 | Trends, predictions | `/timeseries` |
| PERSONA | 10 | UX testing | `/persona` |
| CONSTRAINT | Variable | Multi-criteria optimization | `/constraint` |

### Advanced Patterns (6)

| Pattern | Agents | Best For | Command |
|---------|--------|----------|---------|
| EVOLUTIONARY | 10×N | Optimization through iteration | `/evolutionary` |
| FRACTAL | 5→25→N | Root cause, "keep asking why" | `/fractal` |
| AUCTION | 10 | Resource allocation | `/auction` |
| CRYSTALLIZATION | 10→5 | Ideation, brainstorming | `/crystallization` |
| ECOSYSTEM | 5-10 | Market dynamics modeling | `/ecosystem` |
| CONSENSUS | 10 | Estimation, wisdom of crowds | `/consensus` |

### Mode Variants (3)

| Base | Variant | Best For | Command |
|------|---------|----------|---------|
| DEBATE | PARLIAMENT | Stakeholder voting | `/parliament` |
| ADVERSARIAL | IMMUNE | Ongoing quality patrol | `/immune` |
| ADVERSARIAL | RED/BLUE | Iterative hardening | `/redblue` |

## Features

### Oracle Pre-Flight
Before executing, analyzes your query:
- Recommends best pattern
- Estimates agent count and time
- Suggests optimizations
- Skip with `--fast`

### Confidence Scoring
Every agent rates their findings 1-10 for confidence. Low-confidence findings flagged for review.

### Personality Injection
Add `--diverse` for varied agent perspectives:
- Skeptic, Optimist, Pragmatist, Visionary, Analyst

### Citation Tracking
Outputs show which agents contributed to each finding, including disagreements.

### Memory System
Save learnings to `memory/` folder for future reference.

## Files

```
ROUTER.md              # Main prompt - paste into Claude Code
SCALING.md             # Guide for >10 agent parallelism
patterns/
├── debate.md          # + Parliament mode
├── adversarial.md     # + Immune mode + Red/Blue mode
├── tree.md
├── pipeline.md
├── network.md
├── montecarlo.md
├── grid.md
├── timeseries.md
├── persona.md
├── constraint.md
├── evolutionary.md    # NEW
├── fractal.md         # NEW
├── auction.md         # NEW
├── crystallization.md # NEW
├── ecosystem.md       # NEW
└── consensus.md       # NEW
memory/
└── README.md          # Memory system documentation
```

## Usage Examples

### Basic (Auto-Detection)
```
You: Should I pivot from consulting to SaaS?

Router: ORACLE recommends DEBATE mode (92% fit)...
[Launches 11 agents, synthesizes arguments, delivers verdict]
```

### Direct Override
```
You: /evolutionary "Design optimal freemium pricing"

Router: Running EVOLUTIONARY for 5 generations...
[Breeds, mutates, selects best pricing model]
```

### With Modifiers
```
You: /debate --diverse --confidence "Bootstrap or raise VC?"

Router: Running DEBATE with diverse personalities...
[10 agents with Skeptic, Optimist, etc. personas argue]
```

## Scaling

**Within Claude Max (free):**
- 10 agents run in parallel
- Larger patterns batch automatically (10 at a time)
- Multi-terminal hack for more parallelism

**For 100+ true parallel:** Requires API (see SCALING.md)

See [SCALING.md](./SCALING.md) for detailed options.

## Pattern Selection Guide

| You Want To... | Use |
|----------------|-----|
| Make a decision | DEBATE or PARLIAMENT |
| Find problems | ADVERSARIAL, IMMUNE, or RED/BLUE |
| Learn something | TREE |
| Debug/root cause | FRACTAL |
| Create content | PIPELINE |
| Brainstorm ideas | CRYSTALLIZATION |
| Plan something complex | NETWORK |
| Forecast numbers | MONTE CARLO or CONSENSUS |
| Map a market | GRID |
| Understand trends | TIME-SERIES |
| Model competition | ECOSYSTEM |
| Test with users | PERSONA |
| Optimize design | EVOLUTIONARY or CONSTRAINT |
| Allocate resources | AUCTION |

## Cost

**Free** - Uses Claude Code's Task tool, included in Claude Max subscription.

No API billing. No npm install. Just paste and go.

## Tips

1. **Let Oracle decide** - It's good at picking patterns
2. **Override when needed** - Use `/pattern` syntax
3. **Use modifiers** - `--diverse`, `--confidence`, `--fast`
4. **Save learnings** - Use memory/ for persistence
5. **10 is often enough** - Deep agents beat shallow ones
