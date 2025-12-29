# MONTE CARLO MODE

**When to use:** Forecasting with uncertainty, risk analysis, probability distributions, scenario planning.

## Structure

```
20+ Scenario Agents:
- Each runs different parameter combinations
- Pessimistic, realistic, optimistic ranges
- Random variations within bounds
- Statistical aggregation of all results
```

## Execution Prompt

```
I need you to run a MONTE CARLO MODE simulation on:

"[USER'S FORECASTING/RISK QUESTION]"

Execute this in 4 phases:

## Phase 1: Define Variables & Ranges

First, identify the key variables and their realistic ranges:

| Variable | Pessimistic | Realistic | Optimistic | Distribution |
|----------|-------------|-----------|------------|--------------|
| [Var 1]  | [Low]       | [Mid]     | [High]     | [Normal/Uniform/etc] |
| [Var 2]  | [Low]       | [Mid]     | [High]     | [Normal/Uniform/etc] |
| [Var 3]  | [Low]       | [Mid]     | [High]     | [Normal/Uniform/etc] |

## Phase 2: Run Scenarios (20 parallel agents)

Use the Task tool to launch 20 agents IN PARALLEL, each running a different scenario:

**Fixed Scenarios (5 agents):**
- Agent 1: ALL pessimistic values (worst case)
- Agent 2: ALL realistic values (base case)
- Agent 3: ALL optimistic values (best case)
- Agent 4: Pessimistic external, optimistic internal
- Agent 5: Optimistic external, pessimistic internal

**Random Scenarios (15 agents):**
- Agents 6-20: Each picks random values within the defined ranges

Each agent should:
1. State their parameter values
2. Calculate the outcome (revenue, timeline, risk score, etc.)
3. Identify key drivers that most affected the outcome
4. Note any tipping points or thresholds crossed
5. Describe the scenario narrative

Output format for each agent:
```
SCENARIO: [Number]
PARAMETERS:
- [Var 1]: [Value chosen]
- [Var 2]: [Value chosen]
- [Var 3]: [Value chosen]

OUTCOME: [Calculated result]

KEY DRIVERS:
1. [Most impactful variable]
2. [Second most impactful]

NARRATIVE: [What this scenario looks like in practice]

RISKS IN THIS SCENARIO: [What could go wrong even here]
```

## Phase 3: Statistical Analysis

After all scenarios complete, analyze:

1. **Distribution of Outcomes:**
   - Minimum, Maximum, Mean, Median
   - Standard deviation
   - Percentiles (10th, 25th, 75th, 90th)

2. **Probability Estimates:**
   - P(outcome > X) for key thresholds
   - P(outcome < Y) for failure thresholds

3. **Sensitivity Analysis:**
   - Which variables have the most impact?
   - Which combinations are most dangerous?

4. **Scenario Clustering:**
   - Group similar outcomes
   - Identify the paths that lead to each cluster

## Phase 4: Risk-Adjusted Recommendations

Based on the simulation:

1. **Expected Value:** Probability-weighted outcome
2. **Risk Profile:** Upside vs downside distribution
3. **Key Levers:** What to focus on to improve outcomes
4. **Hedging Strategies:** How to protect against downside
5. **Go/No-Go Thresholds:** What would change the decision
```

## Example Queries

- "What's the realistic revenue range for my baby app in year 1?"
- "How long will this project really take?"
- "What's my probability of reaching £1M ARR in 3 years?"
- "What could our startup valuation be at Series A?"
- "What's the risk-adjusted return on this investment?"

## Output Format

```markdown
# Monte Carlo Simulation: [Question]

## Variables & Ranges

| Variable | Pessimistic | Realistic | Optimistic | Weight |
|----------|-------------|-----------|------------|--------|
| User acquisition | 50/month | 200/month | 500/month | High |
| Conversion rate | 2% | 5% | 10% | High |
| Churn rate | 15% | 8% | 3% | Medium |
| ARPU | £5 | £10 | £20 | High |
[...]

## Scenario Results

### Scenario Distribution

```
Revenue Range Distribution (20 scenarios)

£0-10k:    ████ (4 scenarios)
£10-25k:   ██████ (6 scenarios)
£25-50k:   █████████ (9 scenarios)
£50-100k:  █ (1 scenario)

Min: £3,200
Max: £87,000
Mean: £28,500
Median: £24,000
Std Dev: £18,200
```

### Key Scenarios

**Worst Case (Scenario 1):**
- Parameters: [All pessimistic]
- Outcome: £3,200
- Narrative: [What this looks like]

**Base Case (Scenario 2):**
- Parameters: [All realistic]
- Outcome: £24,000
- Narrative: [What this looks like]

**Best Case (Scenario 3):**
- Parameters: [All optimistic]
- Outcome: £87,000
- Narrative: [What this looks like]

### Probability Analysis

| Threshold | Probability |
|-----------|-------------|
| Revenue > £50k | 15% |
| Revenue > £25k | 45% |
| Revenue > £10k | 80% |
| Revenue < £5k (failure) | 10% |

### Sensitivity Analysis

| Variable | Impact on Outcome | Controllability |
|----------|-------------------|-----------------|
| Conversion rate | Very High (±40%) | High |
| User acquisition | High (±30%) | Medium |
| ARPU | Medium (±20%) | High |
| Churn | Medium (±15%) | Medium |

### Scenario Clusters

**Cluster 1: Success (£40k+)**
- 5 scenarios
- Common factors: High conversion (>7%), Low churn (<5%)
- Path: Focus on activation and retention

**Cluster 2: Moderate (£15-40k)**
- 10 scenarios
- Common factors: Average acquisition, variable conversion
- Path: Standard execution

**Cluster 3: Struggle (<£15k)**
- 5 scenarios
- Common factors: Low acquisition OR high churn
- Path: Need to fix fundamentals

## Risk-Adjusted Recommendations

### Expected Value
**£28,500** (probability-weighted average)

### Risk Profile
- 80% confidence interval: £8,000 - £52,000
- Downside risk (10th percentile): £5,500
- Upside potential (90th percentile): £58,000

### Key Levers (Ranked by Impact × Controllability)
1. **Conversion rate** - Invest in onboarding optimization
2. **ARPU** - Develop premium tier earlier
3. **Churn** - Build retention features

### Hedging Strategies
1. Keep day job for first 6 months (protects against worst case)
2. Set milestone: If <100 users by month 3, pivot
3. Pre-sell annual plans (reduces churn risk)

### Go/No-Go Thresholds
- **GO if:** Year 1 projection > £15k (current: 80% probability)
- **PAUSE if:** Month 3 users < 100
- **STOP if:** Month 6 revenue < £500/month
```
