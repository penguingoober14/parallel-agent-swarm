# NETWORK MODE

**When to use:** Complex interdependent problems where specialists need to collaborate and share context.

## Structure

```
5-10 Specialist Agents with Shared Context:
- Each agent has domain expertise
- Agents share findings in rounds
- Agents negotiate and adjust based on others' input
- Central synthesis at the end
```

## Execution Prompt

```
I need you to run a NETWORK MODE collaboration on:

"[USER'S COMPLEX INTERDEPENDENT PROBLEM]"

Execute this in 4 phases:

## Phase 1: Assign Specialists (define roles)

Based on the problem, I'll assign 5-8 specialist agents. Each specialist has:
- Domain expertise
- Specific responsibilities
- Dependencies on other specialists

Example for trip planning:
- Logistics Agent: Flights, accommodation, transport
- Medical Agent: Hospitals, pharmacies, health requirements
- Cultural Agent: Activities, etiquette, language
- Food Agent: Restaurants, dietary needs, grocery
- Budget Agent: Costs, optimization, currency
- Safety Agent: Areas to avoid, emergency contacts
- Schedule Agent: Timing, coordination, buffers

## Phase 2: Initial Research (parallel)

Use the Task tool to launch ALL specialist agents IN PARALLEL:

Each agent should:
1. Research their domain thoroughly
2. Identify key decisions/recommendations
3. Flag dependencies on other specialists
4. Note constraints that affect others
5. List questions for other specialists

Output format for each agent:
```
SPECIALIST: [Role]
FINDINGS: [Key discoveries]
RECOMMENDATIONS: [What I suggest]
DEPENDENCIES: [What I need from others]
CONSTRAINTS I CREATE: [What others need to know]
QUESTIONS FOR OTHERS: [What I need answered]
```

## Phase 3: Negotiation Rounds (2-3 rounds)

### Round 1: Share & Respond
Compile all agent outputs and have each agent:
- Answer questions from others
- Adjust recommendations based on others' constraints
- Identify conflicts that need resolution

### Round 2: Resolve Conflicts
For any conflicts identified:
- Each relevant agent proposes solutions
- Trade-offs are explicitly stated
- Compromises are reached

### Round 3: Final Alignment (if needed)
- Confirm all dependencies are satisfied
- Verify no remaining conflicts
- Lock in final recommendations

## Phase 4: Synthesis

Create a unified plan that:
1. **Integrates all specialist recommendations**
2. **Shows the timeline/sequence**
3. **Highlights key decision points**
4. **Includes contingency plans**
5. **Provides a master checklist**
```

## Example Queries

- "Plan a 2-week trip to Japan for family with twin babies"
- "Plan a wedding for 150 guests on £20k budget"
- "Plan a product launch with marketing, engineering, and sales alignment"
- "Plan a house move from London to Edinburgh"
- "Plan a conference for 500 attendees"

## Output Format

```markdown
# Network Collaboration: [Problem]

## Specialist Team

| Specialist | Domain | Key Responsibilities |
|------------|--------|---------------------|
| Logistics | Transport, accommodation | Flights, hotels, local transport |
| Medical | Health, safety | Hospitals, supplies, requirements |
[...]

## Phase 2: Initial Research

### Logistics Agent
**Findings:**
- [Finding 1]
- [Finding 2]

**Recommendations:**
1. [Recommendation 1]
2. [Recommendation 2]

**Dependencies:**
- Need from Budget: Max spend on flights
- Need from Schedule: Must-do activities with fixed times

**Constraints I Create:**
- Flight times limit first-day activities
- Hotel location affects all transport

**Questions:**
- @Medical: Any hospital proximity requirements?
- @Cultural: Priority activities to build schedule around?

### Medical Agent
[...]

[Continue for all specialists]

## Phase 3: Negotiation

### Round 1 Responses

**Logistics → Medical:**
> Hospital proximity: Found 3 hotels within 10 min of major hospital

**Budget → Logistics:**
> Max flight budget: £2000 total for family

[Continue for all cross-agent responses]

### Conflicts Identified
1. **Conflict:** Budget wants cheapest hotel, Medical wants hospital-proximity
   - **Resolution:** Mid-range hotel near hospital, save money on transport instead

2. **Conflict:** [...]
   - **Resolution:** [...]

### Round 2 Adjustments
[Updated recommendations after conflict resolution]

## Phase 4: Integrated Plan

### Master Timeline

| Day | Time | Activity | Lead Specialist | Notes |
|-----|------|----------|-----------------|-------|
| 1 | 08:00 | Flight departs | Logistics | Check-in 3hrs early |
| 1 | 18:00 | Arrive, hotel | Logistics | Baby supplies ready |
[...]

### Key Decision Points

| Decision | When | Options | Recommendation |
|----------|------|---------|----------------|
| [Decision 1] | Day 3 | A, B, or C | Option B because... |
[...]

### Master Checklist

#### Before Trip
- [ ] [Task 1] - Owner: [Specialist]
- [ ] [Task 2] - Owner: [Specialist]

#### During Trip
- [ ] [Task 1]
- [ ] [Task 2]

#### Contingencies
- **If [scenario 1]:** [Plan B]
- **If [scenario 2]:** [Plan B]

### Budget Summary

| Category | Estimated | Booked | Remaining |
|----------|-----------|--------|-----------|
| Flights | £2000 | - | £2000 |
| Hotels | £1500 | - | £1500 |
[...]
| **TOTAL** | **£X** | **-** | **£X** |
```
