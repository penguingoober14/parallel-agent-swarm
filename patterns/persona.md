# PERSONA MODE

**When to use:** UX testing, product positioning, marketing message validation, understanding different user perspectives.

## Structure

```
10 Persona Agents:
- Each simulates a different user type
- Each evaluates from their unique perspective
- Reports resonance, friction, and recommendations
- Synthesis identifies universal vs segment-specific insights
```

## Execution Prompt

```
I need you to run a PERSONA MODE evaluation on:

"[USER'S PRODUCT/MESSAGE/EXPERIENCE TO TEST]"

Execute this in 4 phases:

## Phase 1: Define Personas

Create 10 distinct, realistic personas covering your target spectrum:

| # | Name | Demographics | Psychographics | Context | Goals | Pain Points |
|---|------|--------------|----------------|---------|-------|-------------|
| 1 | [Name] | [Age, location, income] | [Values, attitudes] | [Situation] | [What they want] | [What frustrates them] |
| 2 | [Name] | [...] | [...] | [...] | [...] | [...] |
[Continue for all 10]

Ensure personas cover:
- Different life stages
- Different tech comfort levels
- Different urgency levels
- Different price sensitivities
- Edge cases (skeptics, power users)

## Phase 2: Persona Evaluation (10 parallel agents)

Use the Task tool to launch 10 agents IN PARALLEL, each embodying one persona:

Each agent should:

### First Impression (within 5 seconds)
- What catches my eye first?
- Initial emotional reaction?
- Do I understand what this is?
- Do I feel this is for me?

### Value Proposition Assessment
- Does this solve my problem?
- How much do I care about this problem?
- Is the solution clear?
- What's the main benefit to ME?

### Friction Points
- What confuses me?
- What makes me skeptical?
- What would stop me from proceeding?
- What questions remain unanswered?

### Resonance Scoring
Rate 1-10:
- Problem/Solution Fit
- Message Clarity
- Emotional Connection
- Trust/Credibility
- Urgency to Act
- Value vs Price (if applicable)

### Specific Feedback
- What I love (if anything)
- What I'd change
- What's missing
- Deal-breakers for me

### Likely Action
- Would I [sign up/buy/share/ignore]?
- Why or why not?
- What would change my mind?

## Phase 3: Segment Analysis

Group personas by their responses:

**Enthusiasts:** [Which personas loved it, why]
**Skeptics:** [Which personas resisted, why]
**Confused:** [Which personas didn't get it, why]
**Price-sensitive:** [Which personas balked at price, why]

Identify patterns:
- What do enthusiasts have in common?
- What do skeptics have in common?
- Universal friction points (affected everyone)
- Segment-specific issues

## Phase 4: Recommendations Synthesis

Based on all persona feedback:

1. **Universal Wins:** What worked for everyone
2. **Universal Problems:** What failed for everyone (fix these first)
3. **Segment Targeting:** Which personas to focus on
4. **Message Variants:** Different messages for different segments
5. **Feature Priorities:** What to add/remove/change
6. **Pricing Insights:** Willingness to pay by segment
7. **Trust Builders:** What would increase credibility
8. **Conversion Optimizations:** Specific changes to improve action
```

## Example Queries

- "Will my baby tracking app resonate with NICU parents?"
- "Test this landing page copy with different customer segments"
- "How will different user types react to our new pricing?"
- "Evaluate this onboarding flow for different skill levels"
- "Test this marketing message across demographics"

## Output Format

```markdown
# Persona Evaluation: [Product/Message]

## Persona Profiles

### Persona 1: Sarah
**Demographics:** 32, London, £65k income, first-time mom
**Psychographics:** Anxious, over-researcher, values expert advice
**Context:** Baby in NICU for 3 weeks, just came home
**Goals:** Ensure baby is developing normally, catch problems early
**Pain Points:** Information overload, conflicting advice, anxiety

### Persona 2: Marcus
**Demographics:** 28, Manchester, £40k income, dad of twins
**Psychographics:** Pragmatic, time-strapped, values efficiency
**Context:** Twins are 6 months, both parents work
**Goals:** Stay organized, share duties fairly, save time
**Pain Points:** Too many apps, coordination with partner, exhaustion

[Continue for all 10 personas]

---

## Individual Evaluations

### Persona 1: Sarah's Perspective

**First Impression:**
> "The medical-looking interface immediately catches my eye. I feel reassured but also slightly anxious - is this going to tell me something's wrong?"

**Value Proposition:**
- Solves my problem: 9/10 - Yes, this is exactly what I need
- Problem urgency: 10/10 - Critical for me right now
- Solution clarity: 7/10 - Not sure how it tracks "development"
- Main benefit: Peace of mind + early warning

**Friction Points:**
- "How accurate is this? Is it doctor-approved?"
- "What happens if it flags something? Do I panic?"
- "Privacy - who sees my baby's data?"

**Resonance Scores:**
| Factor | Score | Notes |
|--------|-------|-------|
| Problem/Solution Fit | 9 | Perfect for my situation |
| Message Clarity | 7 | Need more detail on how |
| Emotional Connection | 8 | Speaks to my anxiety |
| Trust/Credibility | 6 | Need more medical credibility |
| Urgency to Act | 9 | Would sign up today |
| Value vs Price | 7 | Would pay up to £10/month |

**Specific Feedback:**
- Love: NICU-specific features, milestone tracking
- Change: Add doctor endorsements, explain alert system
- Missing: Integration with NHS app
- Deal-breaker: If data shared with insurance

**Likely Action:** SIGN UP immediately
**Why:** Exactly what I've been looking for
**Change mind:** If I learned data wasn't secure

---

### Persona 2: Marcus's Perspective
[Same detailed format]

[Continue for all 10 personas]

---

## Segment Analysis

### Enthusiasts (Personas 1, 4, 7)
**Common Traits:**
- High anxiety about baby health
- First-time parents or special circumstances
- Willing to pay for peace of mind
- Active researchers

**Why They Love It:**
- Solves acute anxiety
- Feels like control in uncertain situation

### Skeptics (Personas 3, 9)
**Common Traits:**
- Experienced parents
- Trust their instincts
- Resistant to "tech parenting"

**Why They Resist:**
- "I know my baby, don't need an app"
- "Too much monitoring creates anxiety"

### Confused (Personas 5, 8)
**Common Traits:**
- Less tech-savvy
- Unclear on value proposition

**Why They're Lost:**
- "I don't understand what it actually does"
- "Is this a medical device?"

### Price-Sensitive (Personas 2, 6, 10)
**Common Traits:**
- Multiple children
- Budget-conscious
- Feature-focused

**Pricing Feedback:**
- Free tier essential to try
- £5/month max for ongoing
- Need clear value for upgrade

---

## Universal Findings

### Worked for Everyone
1. Core concept of development tracking
2. Visual milestone timeline
3. Partner sharing feature

### Failed for Everyone
1. Unclear data privacy policy
2. No medical credibility signals
3. Confusing pricing page

### Split Opinions
1. Medical alert features (loved by anxious, disliked by relaxed)
2. Amount of data entry required (power users vs casual)

---

## Recommendations

### Must Fix (Universal Problems)
1. Add prominent privacy policy summary
2. Include doctor/pediatrician endorsements
3. Simplify pricing to 2 tiers

### Target Prioritization
**Primary:** Persona 1 type (anxious first-time, special circumstances)
- Message: "Peace of mind for worried parents"
- Features: Medical tracking, alerts

**Secondary:** Persona 2 type (busy multi-child families)
- Message: "One place for all your kids"
- Features: Multi-child, partner sharing

**Deprioritize:** Persona 3 type (experienced, anti-tech)
- Low conversion probability
- Would require different product

### Message Variants

**For Anxious Parents:**
> "Know your baby is on track. Doctor-designed tracking gives you peace of mind."

**For Busy Parents:**
> "All your kids, one app. Share with your partner, save time."

**For Premium Segment:**
> "The same tools NICUs use, now at home."

### Pricing Recommendation
- Free tier: Basic tracking (convert skeptics)
- £4.99/month: Full features (price point consensus)
- £9.99/month: Premium + pediatrician review
```
