# TIME-SERIES MODE

**When to use:** Trend analysis, predictions, understanding evolution over time, forecasting future states.

## Structure

```
10 agents per time period (e.g., 50 total for 5 periods):
- Historical periods analyzed for patterns
- Current state assessed
- Future periods projected
- Trend lines and inflection points identified
```

## Execution Prompt

```
I need you to run a TIME-SERIES MODE analysis on:

"[USER'S TREND/EVOLUTION QUESTION]"

Execute this in 5 phases:

## Phase 1: Define Time Periods

Divide the timeline into 5 meaningful periods:

| Period | Years | Label | Key Question |
|--------|-------|-------|--------------|
| P1 | [Start]-[End] | [Era name] | What was the state then? |
| P2 | [Start]-[End] | [Era name] | How did it change? |
| P3 | [Start]-[End] | [Era name] | What's the current state? |
| P4 | [Start]-[End] | [Era name] | Near-term projection |
| P5 | [Start]-[End] | [Era name] | Long-term projection |

## Phase 2: Historical Analysis (20 parallel agents)

Use the Task tool to launch 10 agents per historical period (P1 + P2 = 20 agents) IN PARALLEL:

**Period 1 Analysis (10 agents):**
Agent 1: Technology landscape in P1
Agent 2: Market size and players in P1
Agent 3: Consumer/user behavior in P1
Agent 4: Regulatory environment in P1
Agent 5: Key innovations in P1
Agent 6: Business models in P1
Agent 7: Pricing dynamics in P1
Agent 8: Distribution channels in P1
Agent 9: Major events/disruptions in P1
Agent 10: Winners and losers in P1

**Period 2 Analysis (10 agents):**
Same 10 dimensions for Period 2

Each agent should provide:
- State at start of period
- State at end of period
- Key changes and why
- Data points and evidence
- Implications for understanding evolution

## Phase 3: Current State Analysis (10 agents)

Use the Task tool to launch 10 agents for Period 3 (current state):

Same 10 dimensions, but with emphasis on:
- Exact current state with data
- Velocity of change (accelerating/decelerating)
- Key tensions and unresolved questions
- Leading indicators of future change

## Phase 4: Future Projection (20 parallel agents)

Use the Task tool to launch 10 agents per future period (P4 + P5 = 20 agents):

**Near-term (P4) Projection (10 agents):**
Each agent projects their dimension for next 2-3 years

**Long-term (P5) Projection (10 agents):**
Each agent projects their dimension for 5-10 years

Each projection should include:
- Base case scenario
- Bull case scenario
- Bear case scenario
- Key assumptions
- Signposts to watch (what would confirm/deny)

## Phase 5: Synthesis

After all periods analyzed:

1. **Trend Lines:** Major trends across all dimensions
2. **Inflection Points:** When did/will things change dramatically
3. **Pattern Matching:** Historical patterns that might repeat
4. **Convergence/Divergence:** Where dimensions are aligning or conflicting
5. **Prediction Confidence:** What we're confident about vs uncertain
6. **Strategic Implications:** What to do based on the analysis
```

## Example Queries

- "How will Salesforce + AI consulting evolve over next 5 years?"
- "What's the future of remote work?"
- "How will EV adoption change the automotive industry?"
- "What's the trajectory of the creator economy?"
- "How will AI change software development?"

## Output Format

```markdown
# Time-Series Analysis: [Topic]

## Timeline Overview

```
P1: 2018-2019    P2: 2020-2021    P3: 2022-2024    P4: 2025-2027    P5: 2028-2030
[Early Days]     [Inflection]     [Current]        [Near Future]    [Long Term]
     │                │                │                │                │
     ▼                ▼                ▼                ▼                ▼
  [State]         [State]          [State]         [Projected]     [Projected]
```

## Period 1: [Era Name] ([Years])

### Technology
[Agent 1 findings]

### Market
[Agent 2 findings]

### Consumer Behavior
[Agent 3 findings]

### Regulatory
[Agent 4 findings]

### Innovation
[Agent 5 findings]

### Business Models
[Agent 6 findings]

### Pricing
[Agent 7 findings]

### Distribution
[Agent 8 findings]

### Disruptions
[Agent 9 findings]

### Winners & Losers
[Agent 10 findings]

### Period 1 Summary
**Key Characteristics:** [Summary]
**Dominant Players:** [List]
**State of Market:** [Description]

---

## Period 2: [Era Name] ([Years])
[Same format as P1]

---

## Period 3: [Current Era] ([Years])

### Current State Summary

| Dimension | State | Velocity | Direction |
|-----------|-------|----------|-----------|
| Technology | [State] | Fast | Accelerating |
| Market | [State] | Medium | Stable |
| Consumers | [State] | Fast | Shifting |
[Continue for all dimensions]

### Unresolved Tensions
1. [Tension 1]
2. [Tension 2]
3. [Tension 3]

### Leading Indicators
- [Indicator 1]: Currently showing [X]
- [Indicator 2]: Currently showing [Y]

---

## Period 4: Near-Term Projection ([Years])

### Scenario Matrix

| Dimension | Bear Case | Base Case | Bull Case |
|-----------|-----------|-----------|-----------|
| Technology | [Slow progress] | [Steady adoption] | [Breakthrough] |
| Market | [Contraction] | [5% growth] | [20% growth] |
[Continue for all dimensions]

### Base Case Narrative
[Description of what P4 looks like in most likely scenario]

### Key Assumptions
1. [Assumption 1]
2. [Assumption 2]

### Signposts to Watch
- If [X happens], bull case more likely
- If [Y happens], bear case more likely

---

## Period 5: Long-Term Projection ([Years])

[Same format as P4, with wider ranges]

---

## Trend Analysis

### Major Trend Lines

```
Dimension        P1   P2   P3   P4   P5
                 ↓    ↓    ↓    ↓    ↓
Technology:     Low → Med → High → Very High → Dominant
Market Size:    £1B → £3B → £8B → £15B → £30B
Competition:    Low → Med → High → High → Consolidating
```

### Inflection Points

| When | What Changed | Why | Impact |
|------|--------------|-----|--------|
| 2020 | [Event] | [Cause] | [Effect] |
| 2023 | [Event] | [Cause] | [Effect] |
| 2026 (projected) | [Event] | [Cause] | [Effect] |

### Historical Patterns That May Repeat
1. [Pattern 1]: Happened in P1→P2, may happen again in P4→P5
2. [Pattern 2]: [Description]

## Prediction Confidence

| Prediction | Confidence | Key Uncertainty |
|------------|------------|-----------------|
| [Prediction 1] | High (80%) | [What could be wrong] |
| [Prediction 2] | Medium (50%) | [What could be wrong] |
| [Prediction 3] | Low (30%) | [What could be wrong] |

## Strategic Implications

### If You're an Incumbent
1. [Action 1]
2. [Action 2]

### If You're a New Entrant
1. [Action 1]
2. [Action 2]

### Timing Recommendations
- **Enter now if:** [Conditions]
- **Wait if:** [Conditions]
- **Avoid if:** [Conditions]
```
