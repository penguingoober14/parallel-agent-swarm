# AUCTION / MARKET MECHANISM MODE

**When to use:** Resource allocation, budget distribution, prioritization decisions where options compete for limited resources.

## Structure

```
10 Bidder Agents (representing options/channels/choices)
3 Bidding Rounds (present → adjust → finalize)
1 Market Clearing (allocate based on value)
```

## Execution Prompt

```
I need you to run AUCTION MODE to allocate:

"[RESOURCE TO ALLOCATE - e.g., £10k marketing budget]"

Among these options:
"[LIST OF OPTIONS/CHANNELS]"

Execute this market mechanism:

## Setup: Define the Market

**Resource Pool:** [Total amount to allocate]
**Allocation Rules:**
- Minimum bid: [X% of total] (ensures participation)
- Maximum bid: [Y% of total] (prevents monopoly)
- Must justify ROI for bid amount

**Bidders:** 10 agents, each representing one option

## Round 1: Initial Bids (10 parallel agents)

Use the Task tool to launch 10 agents IN PARALLEL, each as a bidder:

Agent 1 represents: [Option 1 - e.g., Google Ads]
Agent 2 represents: [Option 2 - e.g., LinkedIn Ads]
Agent 3 represents: [Option 3 - e.g., Content Marketing]
[... continue for all options]

Each agent/bidder must present:

```
BIDDER: [Option name]
INITIAL BID: [Amount requested]
ROI CASE:
- Expected return: [Quantified]
- Confidence level: [High/Medium/Low]
- Timeline to results: [Timeframe]

EVIDENCE:
- [Data point 1]
- [Data point 2]
- [Industry benchmark]

UNIQUE VALUE:
- Why I deserve funding over others
- What I can do that others can't

MINIMUM VIABLE: [Lowest amount that makes sense]
OPTIMAL AMOUNT: [Amount for maximum impact]
```

## Round 2: Bid Adjustment (agents see others' bids)

Share Round 1 results with all agents. Each agent then:

1. Sees competitors' bids and arguments
2. Can adjust their bid (up, down, or hold)
3. Must counter competitors' arguments
4. Can form "coalitions" (e.g., "Content + SEO work together")

Output:
```
REVISED BID: [New amount]
ADJUSTMENT REASON: [Why changed]
COUNTER-ARGUMENTS:
- Against [Competitor 1]: [Why my option is better]
- Against [Competitor 2]: [Why my option is better]
COALITION PROPOSAL: [If any synergies]
```

## Round 3: Final Bids (sealed)

Final sealed bid with:
- Ultimate bid amount
- Final ROI commitment
- Risk acknowledgment
- Success metrics

## Market Clearing: Allocation

Based on all bids, allocate resources using:

1. **Value Score:** ROI case strength × Confidence
2. **Marginal Utility:** Additional value per £ spent
3. **Portfolio Balance:** Diversification value
4. **Coalition Bonus:** Synergies between options

Output final allocation with reasoning.
```

## Example Queries

- "Allocate £10k marketing budget across channels"
- "Distribute my 40 hours/week across projects"
- "Prioritize features for next sprint (100 story points)"
- "Allocate seed funding across departments"
- "Distribute attention across business areas"

## Output Format

```markdown
# Auction Results: [Resource Allocation]

## Market Parameters
- **Total Pool:** £10,000
- **Bidders:** 10 marketing channels
- **Rounds:** 3

---

## Round 1: Opening Bids

### Google Ads (Agent 1)
**Initial Bid:** £3,000 (30%)
**ROI Case:**
- Expected return: 4x (£12,000 revenue)
- Confidence: High
- Timeline: Immediate

**Evidence:**
- Historical ROAS: 3.8x
- Industry benchmark: 3.5x
- Quick to test and optimize

**Minimum Viable:** £1,500
**Optimal:** £4,000

---

### LinkedIn Ads (Agent 2)
**Initial Bid:** £2,500 (25%)
[Same format]

---

[Continue for all 10 bidders]

### Round 1 Summary
| Bidder | Bid | ROI Claim | Confidence |
|--------|-----|-----------|------------|
| Google Ads | £3,000 | 4x | High |
| LinkedIn | £2,500 | 3x | Medium |
| Content | £2,000 | 5x | Low |
[...]
| **TOTAL** | **£15,000** | - | - |

**Oversubscribed by:** £5,000 (50%)

---

## Round 2: Adjustments

### Google Ads Revised
**New Bid:** £2,500 (down from £3,000)
**Reason:** "Will accept less to ensure allocation, can still deliver 3.5x"
**Counter to LinkedIn:** "B2B can be reached via Google too, at lower CPM"
**Coalition:** "Pairs well with Content for retargeting"

[Continue for all bidders]

### Round 2 Summary
| Bidder | Original | Revised | Change |
|--------|----------|---------|--------|
| Google Ads | £3,000 | £2,500 | -17% |
| LinkedIn | £2,500 | £2,000 | -20% |
[...]

---

## Round 3: Final Sealed Bids

| Bidder | Final Bid | ROI Commitment | Risk Level |
|--------|-----------|----------------|------------|
| Google Ads | £2,200 | 3.5x guaranteed | Low |
| Content | £1,800 | 4x over 6 months | Medium |
[...]

---

## Final Allocation

### Allocation Decision

| Channel | Allocated | % of Budget | Expected Return |
|---------|-----------|-------------|-----------------|
| Google Ads | £2,500 | 25% | £8,750 |
| Content Marketing | £2,000 | 20% | £8,000 |
| SEO | £1,500 | 15% | £6,000 |
| LinkedIn | £1,500 | 15% | £4,500 |
| Email | £1,000 | 10% | £5,000 |
| Events | £1,000 | 10% | £3,000 |
| Reserve | £500 | 5% | - |
| **TOTAL** | **£10,000** | **100%** | **£35,250** |

### Allocation Reasoning

**Google Ads (£2,500):**
- Strongest ROI case with evidence
- Immediate results for cash flow
- Won bid despite reducing ask

**Content Marketing (£2,000):**
- Highest long-term ROI potential
- Coalition bonus with SEO (+15% efficiency)
- Builds owned asset

**Unallocated Options:**
- Podcast Ads: Rejected - ROI case too speculative
- Print: Rejected - Poor targeting for audience

### Portfolio Analysis

```
Risk Distribution:
Low Risk:    ████████░░ 40% (Google, Email)
Medium Risk: ██████░░░░ 30% (Content, SEO)
High Risk:   ███░░░░░░░ 15% (LinkedIn, Events)
Reserve:     █░░░░░░░░░ 5%

Timeline Distribution:
Immediate:   ███████░░░ 35%
3-month:     █████░░░░░ 25%
6-month:     ████░░░░░░ 20%
```

### Success Metrics

| Channel | KPI | Target | Measurement |
|---------|-----|--------|-------------|
| Google Ads | ROAS | 3.5x | Weekly |
| Content | Organic traffic | +50% | Monthly |
| SEO | Rankings | Top 10 for 5 keywords | Quarterly |
```

## Configuration Options

```
/auction "Resource" --bidders=10     # Number of options
/auction "Resource" --rounds=3       # Bidding rounds
/auction "Resource" --reserve=10%    # Hold back percentage
/auction "Resource" --coalition      # Enable coalition bidding
```

## Economics Principles Applied

- **Price Discovery:** Bids reveal true perceived value
- **Competition:** Forces honest assessment
- **Marginal Utility:** Allocate where next £ has most impact
- **Portfolio Theory:** Diversification reduces risk
