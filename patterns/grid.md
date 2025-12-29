# GRID MODE

**When to use:** Market analysis, competitive landscapes, 2D mapping of any domain with two key dimensions.

## Structure

```
N×M Grid (typically 5×5 = 25 agents):
- Axis 1: One dimension (e.g., company size)
- Axis 2: Another dimension (e.g., service type)
- Each cell researched by one agent
- Matrix synthesis reveals gaps and opportunities
```

## Execution Prompt

```
I need you to run a GRID MODE analysis on:

"[USER'S MARKET/LANDSCAPE ANALYSIS]"

Execute this in 4 phases:

## Phase 1: Define the Grid

First, define the two axes that best segment this landscape:

**Axis 1 (Rows):** [Dimension 1]
- Row 1: [Segment 1]
- Row 2: [Segment 2]
- Row 3: [Segment 3]
- Row 4: [Segment 4]
- Row 5: [Segment 5]

**Axis 2 (Columns):** [Dimension 2]
- Col A: [Segment A]
- Col B: [Segment B]
- Col C: [Segment C]
- Col D: [Segment D]
- Col E: [Segment E]

This creates a 5×5 = 25 cell matrix.

## Phase 2: Cell Research (25 parallel agents)

Use the Task tool to launch 25 agents IN PARALLEL, one for each cell:

Agent 1A: Research [Row 1] × [Col A]
Agent 1B: Research [Row 1] × [Col B]
Agent 1C: Research [Row 1] × [Col C]
...
Agent 5E: Research [Row 5] × [Col E]

Each agent should research their cell and provide:

1. **Players:** Companies/products in this space
2. **Market Size:** Estimated size of this segment
3. **Competition Level:** Low/Medium/High/Saturated
4. **Key Success Factors:** What it takes to win here
5. **Notable Examples:** 2-3 standout players
6. **Opportunity Score:** 1-10 rating for new entry
7. **Entry Barriers:** What makes it hard to enter
8. **Trends:** What's changing in this cell

## Phase 3: Pattern Analysis

After all cells are researched, analyze:

### Row Analysis
For each row, what patterns emerge across columns?

### Column Analysis
For each column, what patterns emerge across rows?

### Diagonal Patterns
Are there patterns in corners or diagonals?

### Heat Maps
Create heat maps for:
- Competition intensity
- Market size
- Opportunity score
- Growth rate

## Phase 4: Strategic Synthesis

Based on the complete grid:

1. **White Spaces:** Empty or underserved cells
2. **Hot Zones:** Crowded but valuable cells
3. **Emerging Cells:** Low competition, growing potential
4. **Declining Cells:** Once valuable, now fading
5. **Entry Recommendations:** Best cells for a new entrant
6. **Avoid List:** Cells to stay away from
7. **Adjacency Plays:** Natural expansion paths
```

## Example Queries

- "Map the UK Salesforce consulting market"
- "Analyze the mobile app market by category and monetization model"
- "Map SaaS tools by company size and function"
- "Analyze streaming services by content type and price tier"
- "Map the coffee market by format and occasion"

## Output Format

```markdown
# Grid Analysis: [Market/Landscape]

## Grid Definition

**Axis 1 (Rows):** [Dimension 1 - e.g., Company Size]
1. Enterprise (1000+ employees)
2. Mid-market (100-1000)
3. SMB (10-100)
4. Small Business (1-10)
5. Freelancer/Solo

**Axis 2 (Columns):** [Dimension 2 - e.g., Service Type]
A. Implementation
B. Integration
C. Custom Development
D. Support/Managed Services
E. Strategy/Advisory

## Complete Grid

### Cell 1A: Enterprise × Implementation

**Players:**
- Accenture
- Deloitte Digital
- IBM

**Market Size:** £500M+

**Competition:** Saturated

**Key Success Factors:**
- Global delivery capability
- Industry expertise
- Executive relationships

**Opportunity Score:** 3/10

**Entry Barriers:** Very high - requires scale, brand, references

**Trends:** Moving to outcome-based pricing

---

### Cell 1B: Enterprise × Integration
[Same format...]

[Continue for all 25 cells]

## Heat Maps

### Competition Intensity
```
         A     B     C     D     E
    ┌─────────────────────────────────┐
  1 │ ███   ███   ██    █     ██  │
  2 │ ██    ██    ██    █     █   │
  3 │ ██    █     ███   ██    █   │
  4 │ █     █     ██    ███   █   │
  5 │ █     -     █     ██    -   │
    └─────────────────────────────────┘
    ███ = High   ██ = Medium   █ = Low   - = None
```

### Opportunity Score
```
         A     B     C     D     E
    ┌─────────────────────────────────┐
  1 │  3     4     5     7     6  │
  2 │  5     6     7     8     7  │
  3 │  7     8     6     7     8  │
  4 │  8     7     5     6     9  │
  5 │  6     5     4     5     7  │
    └─────────────────────────────────┘
```

### Market Size (relative)
[Similar heat map]

## Pattern Analysis

### Row Patterns

**Row 1 (Enterprise):**
- Dominated by global consultancies
- High barriers across all columns
- Premium pricing, long sales cycles

**Row 2 (Mid-market):**
- More fragmented competition
- Sweet spot for specialized players
- Growing fastest

[Continue for all rows]

### Column Patterns

**Column A (Implementation):**
- Commodity in lower rows
- Premium in upper rows
- Declining margins industry-wide

[Continue for all columns]

## Strategic Recommendations

### White Spaces (High Opportunity)
1. **Cell 4E (Small Business × Strategy):** Almost no players, growing demand
2. **Cell 3B (SMB × Integration):** Few specialists, high pain point
3. **Cell 2D (Mid-market × Managed Services):** Underserved, recurring revenue

### Hot Zones (Crowded but Valuable)
1. **Cell 1A (Enterprise × Implementation):** £500M but saturated
2. **Cell 3C (SMB × Custom Dev):** Growing but many players

### Avoid List
1. **Cell 1A:** Need £100M+ to compete
2. **Cell 5C:** Low margins, commoditized

### Recommended Entry Strategy
**Primary Target:** Cell 3B (SMB × Integration)
- Market size: £50M
- Competition: Low
- Entry cost: Low
- Path to adjacent cells: 2B, 3A, 3C

**Expansion Path:**
Cell 3B → Cell 2B → Cell 2C → Cell 2D (recurring revenue)
```
