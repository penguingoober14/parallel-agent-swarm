# DEBATE MODE

**When to use:** Controversial decisions, strategic choices, ethical dilemmas, any situation with multiple valid perspectives.

## Structure

```
11 Agents Total:
- 5 agents argue FOR the position
- 5 agents argue AGAINST the position
- 1 judge agent synthesizes and weighs arguments
```

## Execution Prompt

```
I need you to run a DEBATE MODE analysis on this question:

"[USER'S QUESTION]"

Execute this in 3 phases:

## Phase 1: Arguments FOR (5 parallel agents)

Use the Task tool to launch 5 agents IN PARALLEL, each arguing FOR the position from a different angle:

Agent 1 (Financial): Argue FOR from a financial/ROI perspective
Agent 2 (Strategic): Argue FOR from a strategic/competitive advantage perspective
Agent 3 (Risk): Argue FOR from a risk mitigation perspective
Agent 4 (Opportunity): Argue FOR from an opportunity cost perspective
Agent 5 (Personal): Argue FOR from a lifestyle/personal benefit perspective

Each agent should provide:
- 3 strong arguments with evidence
- Potential upsides with realistic estimates
- Counter to the strongest opposing argument

## Phase 2: Arguments AGAINST (5 parallel agents)

Use the Task tool to launch 5 agents IN PARALLEL, each arguing AGAINST from a different angle:

Agent 6 (Financial): Argue AGAINST from a financial/cost perspective
Agent 7 (Strategic): Argue AGAINST from a strategic/timing perspective
Agent 8 (Risk): Argue AGAINST from a risk exposure perspective
Agent 9 (Opportunity): Argue AGAINST from an opportunity cost perspective
Agent 10 (Personal): Argue AGAINST from a lifestyle/personal impact perspective

Each agent should provide:
- 3 strong arguments with evidence
- Potential downsides with realistic estimates
- Counter to the strongest supporting argument

## Phase 3: Judge Synthesis

After all 10 agents complete, synthesize as the JUDGE:

1. **Argument Scorecard**: Rate each argument 1-10 for strength
2. **Weight Matrix**: Assign importance weights to each perspective (financial, strategic, risk, opportunity, personal)
3. **Key Tensions**: Identify the 3 most critical trade-offs
4. **Decision Framework**: Provide a structured decision matrix
5. **Recommendation**: Clear recommendation with confidence level (high/medium/low)
6. **Conditions**: Under what conditions would the opposite choice be better?
```

## Example Queries

- "Should I sell my consulting business or scale it to £5M?"
- "Should we migrate to microservices or stay with our monolith?"
- "Should I take the higher-paying job or the more interesting one?"
- "Should we raise VC funding or bootstrap?"
- "Should we expand internationally or focus on domestic market?"

---

## PARLIAMENT MODE (Variant)

**Use when:** Decisions affect multiple stakeholders who need representation.

### Parliament Structure

```
Instead of FOR/AGAINST, agents represent constituencies:
- Each constituency gets proportional representation
- Each votes from their perspective
- Decisions require majority or supermajority
```

### Parliament Execution Prompt

```
I need you to run PARLIAMENT MODE on:

"[DECISION AFFECTING MULTIPLE STAKEHOLDERS]"

## Setup: Define Constituencies

| Constituency | Seats | Representative Focus |
|--------------|-------|---------------------|
| Users/Customers | 4 | User experience, value, satisfaction |
| Developers/Team | 2 | Technical feasibility, maintenance, complexity |
| Investors/Business | 2 | ROI, growth, risk |
| Regulators/Legal | 1 | Compliance, liability, ethics |
| Partners/Ecosystem | 1 | Integrations, compatibility, relationships |

Total: 10 seats

## Phase 1: Constituency Positions (10 parallel agents)

Launch 10 agents, each representing one seat:

Each agent should:
1. State their constituency's primary concerns
2. Evaluate the proposal from their perspective
3. List requirements for their support
4. State their initial vote: YES / NO / ABSTAIN
5. Propose amendments that would change their vote

## Phase 2: Debate & Amendments

Agents can propose amendments to the original proposal:
- Amendment requires 3+ sponsors
- Each agent states position on amendments
- Votes on amendments before main vote

## Phase 3: Final Vote

| Constituency | Seats | Vote | Reasoning |
|--------------|-------|------|-----------|
| Users | 4 | 3 YES, 1 NO | [Summary] |
| Developers | 2 | 2 YES | [Summary] |
[...]

**Result:** [PASSED/FAILED] with [X/10] votes

**Majority type required:**
- Simple (>50%): 6+ votes
- Supermajority (66%): 7+ votes
- Unanimous: 10 votes
```

### Parliament Example

**Decision:** "Should we add AI features to the baby tracking app?"

| Constituency | Vote | Key Concern |
|--------------|------|-------------|
| NICU Parents (2) | YES | Want better predictions |
| General Parents (2) | SPLIT | Privacy concerns |
| Developers (2) | YES | Excited about tech |
| Investors (2) | YES | Differentiation |
| Regulators (1) | NO | Medical device concerns |
| Privacy Advocates (1) | NO | Data usage |

**Result:** 7-3 PASSED (supermajority)
**Conditions:** Must address privacy in implementation

### Parliament Output Format

```markdown
# Parliament Decision: [Proposal]

## Constituency Representation

| Constituency | Seats | Representatives |
|--------------|-------|-----------------|
| Users | 4 | NICU parents (2), General parents (2) |
[...]

## Position Statements

### NICU Parents (2 seats)
**Position:** SUPPORT
**Key Concerns:** [...]
**Requirements for Support:** [...]

[Continue for all]

## Amendments Proposed

### Amendment 1: Add Privacy Controls
**Sponsors:** Privacy Advocates, General Parents (2)
**Vote:** 8-2 PASSED
**Effect:** Added to proposal

## Final Vote

| Constituency | Seats | YES | NO | ABSTAIN |
|--------------|-------|-----|-----|---------|
| NICU Parents | 2 | 2 | 0 | 0 |
[...]
| **TOTAL** | **10** | **7** | **3** | **0** |

## Decision
**PASSED** with 7/10 votes (supermajority achieved)

## Binding Conditions
1. [Amendment 1 requirements]
2. [Minority protections]
```

---

## Output Format

```markdown
# Debate Analysis: [Question]

## Arguments FOR
### Financial Perspective
[Agent 1 output]

### Strategic Perspective
[Agent 2 output]

[...etc for all 5]

## Arguments AGAINST
### Financial Perspective
[Agent 6 output]

[...etc for all 5]

## Judge's Verdict

### Argument Scorecard
| Argument | Strength (1-10) | Weight | Weighted Score |
|----------|-----------------|--------|----------------|
| ...      | ...             | ...    | ...            |

### Key Tensions
1. [Tension 1]
2. [Tension 2]
3. [Tension 3]

### Decision Matrix
[Structured framework]

### Recommendation
**Decision:** [FOR/AGAINST]
**Confidence:** [High/Medium/Low]
**Rationale:** [Summary]

### Flip Conditions
The opposite choice would be better if:
- [Condition 1]
- [Condition 2]
```
