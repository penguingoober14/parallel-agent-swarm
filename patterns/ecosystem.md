# ECOSYSTEM SIMULATION MODE

**When to use:** Market dynamics analysis, competitive landscape evolution, understanding complex adaptive systems over time.

## Structure

```
Species/Players: 5-10 different actor types
Simulation Rounds: 5 cycles of interaction
Dynamics: Competition, cooperation, adaptation, evolution
Emergence: Observe what patterns develop naturally
```

## Execution Prompt

```
I need you to run ECOSYSTEM SIMULATION on:

"[MARKET/SYSTEM TO SIMULATE]"

Execute this multi-agent simulation:

## Setup: Define the Ecosystem

**Environment:** [Market/industry being simulated]
**Time Horizon:** [Each round represents X time period]
**Resources:** [What actors compete for - customers, budget, talent, etc.]

**Species Definitions:**

| Species | Archetype | Traits | Starting Position |
|---------|-----------|--------|-------------------|
| S1 | [e.g., Elephants] | Slow, powerful, resource-rich | Dominant |
| S2 | [e.g., Gazelles] | Fast, agile, opportunistic | Growing |
| S3 | [e.g., Mice] | Many, adaptable, low-cost | Scattered |
| S4 | [e.g., Predators] | Aggressive, disruptive | Emerging |
| S5 | [e.g., Symbiotes] | Cooperative, ecosystem-dependent | Niche |

## Round 0: Initial State (5-10 parallel agents)

Use the Task tool to launch agents IN PARALLEL, each representing a species:

Each species agent defines:
```
SPECIES: [Name]
CURRENT STATE:
- Market share: [%]
- Resources: [Level]
- Strengths: [List]
- Weaknesses: [List]
- Strategy: [Current approach]

RELATIONSHIPS:
- Competes with: [Species]
- Cooperates with: [Species]
- Preys on: [Species]
- Avoids: [Species]
```

## Rounds 1-5: Simulation Cycles

For each round, run the simulation cycle:

### Step 1: Actions (parallel)
Each species agent declares their action for this round:
- EXPAND: Try to grow market share
- DEFEND: Protect current position
- ADAPT: Change strategy/offering
- ALLY: Form partnership with another species
- ATTACK: Directly compete with target species
- RETREAT: Exit certain areas

### Step 2: Interactions (resolve)
Process interactions:
- If EXPAND meets DEFEND → Defender advantage
- If ATTACK meets ATTACK → Both lose resources
- If ALLY meets ALLY → Synergy bonus
- If ADAPT succeeds → New capability gained

### Step 3: Environment Changes
Each round, introduce one environmental shift:
- Round 1: [Change - e.g., New regulation]
- Round 2: [Change - e.g., Technology shift]
- Round 3: [Change - e.g., New entrant]
- Round 4: [Change - e.g., Economic change]
- Round 5: [Change - e.g., Customer preference shift]

### Step 4: Outcomes
Calculate new state for each species:
- Market share change
- Resource change
- Capability changes
- Relationship changes

### Step 5: Evolution
Species that performed poorly must adapt or shrink.
Species that performed well can expand strategy.

## Final Analysis

After 5 rounds:

1. **Final State:** Where each species ended up
2. **Trajectory:** How each evolved over time
3. **Emergent Patterns:** Unexpected dynamics that developed
4. **Tipping Points:** When/why major shifts occurred
5. **Stable States:** What equilibrium emerged (if any)
6. **Predictions:** Likely next developments
```

## Example Queries

- "Simulate the UK Salesforce consulting market over 5 years"
- "Model the streaming service landscape evolution"
- "Simulate the EV charging market dynamics"
- "Model how AI will affect creative industries"
- "Simulate the baby app market competition"

## Output Format

```markdown
# Ecosystem Simulation: [Market]

## Ecosystem Definition

**Environment:** UK Salesforce Consulting Market
**Time Horizon:** Each round = 1 year
**Resources:** Client budget, talent, partnerships, reputation

### Species Defined

| Species | Type | Examples | Starting Share |
|---------|------|----------|----------------|
| Elephants | Global Consultancies | Accenture, Deloitte | 45% |
| Gazelles | Mid-size Specialists | Various | 25% |
| Mice | Freelancers/Boutiques | Independents | 20% |
| Symbiotes | ISV Partners | AppExchange vendors | 10% |

---

## Round 0: Initial State

### Elephants (Global Consultancies)
**Market Share:** 45%
**Resources:** Very High
**Strengths:** Brand, global reach, enterprise relationships
**Weaknesses:** Expensive, slow, generic
**Strategy:** Land and expand in enterprise

**Relationships:**
- Competes with: Gazelles for mid-market
- Cooperates with: Symbiotes (use their tools)
- Ignores: Mice (too small to notice)

### Gazelles (Mid-size Specialists)
[Same format]

[Continue for all species]

---

## Round 1: Year 1

### Environmental Change: AI Tools Emerge
Salesforce releases AI capabilities. Market shifts.

### Actions Declared

| Species | Action | Target | Rationale |
|---------|--------|--------|-----------|
| Elephants | ADAPT | AI capability | Must show AI expertise |
| Gazelles | EXPAND | Enterprise | Elephants distracted by AI |
| Mice | ALLY | Other mice | Form collective for AI |
| Symbiotes | EXPAND | AI tools | Natural fit |

### Interactions

- **Gazelles EXPAND vs Elephants (distracted):** Gazelles gain 3% enterprise share
- **Mice ALLY:** "Independent AI Collective" forms - 50 freelancers
- **Symbiotes EXPAND:** Two new AI tools launched

### Round 1 Outcomes

| Species | Share Before | Share After | Change |
|---------|--------------|-------------|--------|
| Elephants | 45% | 43% | -2% |
| Gazelles | 25% | 28% | +3% |
| Mice | 20% | 19% | -1% |
| Symbiotes | 10% | 10% | 0% |

---

## Round 2: Year 2

### Environmental Change: Economic Slowdown
Clients cut budgets. Price pressure increases.

### Actions Declared

| Species | Action | Target | Rationale |
|---------|--------|--------|-----------|
| Elephants | DEFEND | Enterprise accounts | Protect revenue |
| Gazelles | ATTACK | Elephants | Undercut on price |
| Mice | EXPAND | SMB market | Enterprises too hard |
| Symbiotes | ADAPT | Consumption pricing | Match budget concerns |

[Continue same format]

---

## Round 3: Year 3
[Continue simulation]

---

## Round 4: Year 4
[Continue simulation]

---

## Round 5: Year 5

### Final Environmental Change: Salesforce Partner Consolidation
Salesforce reduces partner tiers. Pressure to grow or exit.

[Final round details]

---

## Final State (Year 5)

### Market Share Evolution

```
Species      Y0    Y1    Y2    Y3    Y4    Y5   Trend
Elephants   45% → 43% → 40% → 38% → 36% → 35%  ↓ Declining
Gazelles    25% → 28% → 30% → 32% → 33% → 35%  ↑ Growing
Mice        20% → 19% → 18% → 20% → 22% → 20%  ↔ Stable
Symbiotes   10% → 10% → 12% → 10% → 9%  → 10%  ↔ Stable
```

### Visual Trajectory

```
50% ┤ E E
    │     E E E E
40% ┤           E E
    │   G G G
35% ┤       G G G G
    │
30% ┤
    │
25% ┤ G
    │
20% ┤ M M M M M M M
    │
15% ┤
    │
10% ┤ S S S S S S S
    └─────────────────
      0 1 2 3 4 5  Years
```

### Emergent Patterns

1. **Elephant Decline:** Global consultancies couldn't adapt fast enough to AI
2. **Gazelle Rise:** Mid-size specialists became the "Goldilocks" option
3. **Mice Coalition:** Freelancer collective became a pseudo-Gazelle
4. **Symbiote Stability:** Tool vendors maintained position through all changes

### Tipping Points

| Year | Event | Impact |
|------|-------|--------|
| Y1 | AI introduction | Redistributed technical advantage |
| Y2 | Economic pressure | Price became key differentiator |
| Y4 | Coalition matured | Changed competitive dynamics |

### Equilibrium Analysis

The market appears to be stabilizing toward:
- 2-3 dominant Gazelles
- Elephants retained only for largest enterprises
- Mice coalition functioning as new species
- Symbiotes as essential infrastructure

### Predictions for Year 6-10

1. **Consolidation:** Gazelles will acquire each other
2. **Elephant Exit:** 1-2 global players may exit market
3. **Platform Shift:** AI tools may eliminate some service categories
4. **New Species:** Expect AI-native consultancies to emerge

---

## Strategic Implications

### If You're an Elephant
- Specialize or exit - generic doesn't work
- Acquire a Gazelle for agility
- Partner with Symbiotes for innovation

### If You're a Gazelle
- Now is expansion time - go aggressive
- Differentiate before commoditization
- Consider acquiring Mice talent

### If You're a Mouse
- Join or form a coalition
- Specialize deeply in AI
- Build referral networks

### If You're a Symbiote
- Double down on AI tools
- Build switching costs
- Partner with rising Gazelles
```

## Dynamics Modeled

- **Competition:** Direct rivalry for market share
- **Cooperation:** Alliances and partnerships
- **Adaptation:** Strategy evolution under pressure
- **Emergence:** Unexpected patterns from interactions
- **Environmental Pressure:** External forces shaping evolution
