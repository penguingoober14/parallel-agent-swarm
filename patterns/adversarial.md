# ADVERSARIAL MODE

**When to use:** Security audits, code review, contract review, stress testing, quality assurance, finding flaws in plans/designs.

## Structure

```
16+ Agents Total:
- 1 architect/builder agent (creates the thing to be tested)
- 10 attacker agents (each tries different attack vectors)
- 5 compliance/gap finder agents
- 1 synthesis agent (consolidates findings and fixes)
```

## Execution Prompt

```
I need you to run an ADVERSARIAL MODE analysis on:

"[USER'S SUBJECT - architecture, code, plan, contract, etc.]"

Execute this in 4 phases:

## Phase 1: Build/Document (1 agent)

First, use the Task tool to launch 1 agent that clearly documents/analyzes the subject:
- If it's architecture: Document all components, data flows, access points
- If it's code: Analyze structure, dependencies, entry points
- If it's a plan: Outline assumptions, dependencies, critical paths
- If it's a contract: Summarize terms, obligations, conditions

Output: Clear documentation of what we're attacking.

## Phase 2: Attack Vectors (10 parallel agents)

Use the Task tool to launch 10 agents IN PARALLEL, each attacking from a different vector:

Agent 1 (Injection): Find SQL injection, command injection, code injection vulnerabilities
Agent 2 (Authentication): Find auth bypass, session hijacking, credential exposure
Agent 3 (Authorization): Find privilege escalation, access control gaps
Agent 4 (Data Exposure): Find sensitive data leaks, PII exposure, logging issues
Agent 5 (Logic Flaws): Find business logic vulnerabilities, race conditions
Agent 6 (Denial of Service): Find resource exhaustion, infinite loops, memory leaks
Agent 7 (Supply Chain): Find dependency vulnerabilities, third-party risks
Agent 8 (Configuration): Find misconfigurations, default credentials, exposed endpoints
Agent 9 (Edge Cases): Find boundary conditions, unusual inputs, error handling gaps
Agent 10 (Social Engineering): Find human-factor vulnerabilities, phishing vectors

Each agent should:
- List all potential vulnerabilities found
- Rate severity (Critical/High/Medium/Low)
- Provide proof-of-concept or attack scenario
- Suggest immediate mitigation

## Phase 3: Compliance Gaps (5 parallel agents)

Use the Task tool to launch 5 agents IN PARALLEL:

Agent 11 (GDPR): Check GDPR compliance gaps
Agent 12 (Security Standards): Check OWASP Top 10, CIS benchmarks
Agent 13 (Industry Standards): Check industry-specific requirements (PCI-DSS, HIPAA, SOC2)
Agent 14 (Best Practices): Check against security best practices
Agent 15 (Documentation): Check for missing security documentation, audit trails

## Phase 4: Synthesis & Fixes

After all agents complete, synthesize:

1. **Vulnerability Summary**: All findings ranked by severity
2. **Risk Matrix**: Likelihood vs Impact for each finding
3. **Attack Surface Map**: Visual representation of all entry points
4. **Prioritized Fix List**: What to fix first, second, third
5. **Quick Wins**: Fixes that can be done in < 1 hour
6. **Architecture Recommendations**: Structural changes needed
7. **Residual Risk**: What remains even after fixes
```

## Example Queries

- "Is this Salesforce architecture secure for handling GDPR data?"
- "Review this smart contract for vulnerabilities"
- "Stress test my business plan - what could go wrong?"
- "Find loopholes in this employment contract"
- "Audit this API design for security issues"

## Output Format

```markdown
# Adversarial Analysis: [Subject]

## Subject Documentation
[Phase 1 output - what we're analyzing]

## Vulnerability Findings

### Critical Severity
| ID | Vector | Finding | Impact | Mitigation |
|----|--------|---------|--------|------------|
| V1 | Injection | ... | ... | ... |

### High Severity
[Same table format]

### Medium Severity
[Same table format]

### Low Severity
[Same table format]

## Compliance Gaps
| Standard | Gap | Requirement | Current State | Remediation |
|----------|-----|-------------|---------------|-------------|
| GDPR | ... | ... | ... | ... |

## Risk Matrix
```
        High Impact
            │
   Critical │ High
     ───────┼───────
     Medium │ Low
            │
        Low Impact
     Low ─────── High Likelihood
```

## Attack Surface Map
[Visual or structured representation]

## Prioritized Remediation Plan

### Immediate (< 1 hour)
1. [Quick fix 1]
2. [Quick fix 2]

### Short-term (< 1 week)
1. [Fix 1]
2. [Fix 2]

### Long-term (Architecture)
1. [Structural change 1]
2. [Structural change 2]

## Residual Risk Assessment
After all remediations, remaining risks:
- [Risk 1]
- [Risk 2]
```

---

## IMMUNE SYSTEM MODE (Variant)

**Use when:** Ongoing quality patrol, continuous problem detection, self-organizing review.

### Immune System Structure

```
Antibody agents patrol different domains:
- Each specializes in detecting one problem type
- When issues found, agent "replicates" (spawns deeper analysis)
- Clean areas → antibodies move elsewhere
- Self-organizing, adaptive coverage
```

### Immune System Execution Prompt

```
I need you to run IMMUNE SYSTEM MODE on:

"[SYSTEM/CODEBASE/PROCESS TO PATROL]"

## Phase 1: Deploy Antibodies (10 parallel agents)

Launch 10 specialized antibody agents IN PARALLEL:

| Antibody | Hunts For | Domain |
|----------|-----------|--------|
| Security-Ab | Vulnerabilities, exploits | Security |
| Performance-Ab | Bottlenecks, slow queries | Performance |
| UX-Ab | Friction, confusion, dead ends | User Experience |
| Data-Ab | Inconsistencies, orphans, duplicates | Data Quality |
| Logic-Ab | Edge cases, race conditions | Business Logic |
| Compliance-Ab | Regulation gaps, policy violations | Compliance |
| Technical-Debt-Ab | Code smells, outdated patterns | Maintainability |
| Integration-Ab | API mismatches, sync issues | Integrations |
| Error-Ab | Unhandled exceptions, silent failures | Error Handling |
| Documentation-Ab | Missing docs, stale comments | Documentation |

Each antibody patrols its domain:
```
ANTIBODY: [Type]
PATROL AREA: [What I'm scanning]
STATUS: CLEAN / INFECTED / CRITICAL

FINDINGS:
- [Issue 1] - Severity: [X] - Location: [Y]
- [Issue 2] - Severity: [X] - Location: [Y]

REPLICATION NEEDED: YES/NO
If YES: [What specific area needs deeper investigation]
```

## Phase 2: Replication (for infected areas)

For any antibody that found issues, spawn sub-agents:
- Original antibody spawns 3 sub-agents
- Sub-agents investigate specific findings
- Detailed analysis of each issue

## Phase 3: Immune Response Summary

Map showing:
- Clean areas (green) - No issues
- Minor infection (yellow) - Some issues
- Major infection (red) - Critical problems
- Antibody coverage - Which areas patrolled

Output: Prioritized remediation matching infection severity
```

### Immune System Output Format

```markdown
# Immune System Patrol: [Subject]

## Antibody Deployment

| Antibody | Status | Issues Found | Severity |
|----------|--------|--------------|----------|
| Security | INFECTED | 3 | HIGH |
| Performance | CLEAN | 0 | - |
| UX | INFECTED | 5 | MEDIUM |
| Data | CRITICAL | 8 | HIGH |
[...]

## Infection Map

```
┌─────────────────────────────────────┐
│ SECURITY     │ PERFORMANCE │ UX    │
│ 🔴 3 issues  │ 🟢 Clean    │ 🟡 5  │
├──────────────┼─────────────┼───────┤
│ DATA         │ LOGIC       │ COMP  │
│ 🔴 8 issues  │ 🟢 Clean    │ 🟡 2  │
├──────────────┼─────────────┼───────┤
│ TECH DEBT    │ INTEGRATION │ ERROR │
│ 🟡 4 issues  │ 🟢 Clean    │ 🟡 3  │
└─────────────────────────────────────┘
```

## Replication Results

### Security Antibody → Sub-agents
[Detailed findings from deeper investigation]

### Data Antibody → Sub-agents
[Detailed findings from deeper investigation]

## Immune Response Recommendation

### Immediate Quarantine (Critical)
1. Data inconsistency in [X]
2. Security gap in [Y]

### Treatment Plan (High)
[...]

### Maintenance (Medium)
[...]
```

---

## RED TEAM / BLUE TEAM MODE (Variant)

**Use when:** Iterative hardening through attack-defend cycles.

### Red/Blue Structure

```
Iterative war games:
- Blue Team designs/defends
- Red Team attacks
- Blue Team patches
- Red Team attacks again
- Repeat for N rounds
```

### Red/Blue Execution Prompt

```
I need you to run RED TEAM / BLUE TEAM MODE on:

"[SYSTEM/PLAN/ARCHITECTURE TO HARDEN]"

Execute [N] rounds of attack-defend:

## Round 1

### Blue Team (5 agents) - DESIGN
Build/document the defense:
- Agent B1: Core security architecture
- Agent B2: Access control design
- Agent B3: Data protection measures
- Agent B4: Monitoring and detection
- Agent B5: Incident response plan

Output: Complete defensive posture

### Red Team (5 agents) - ATTACK
Attempt to breach:
- Agent R1: External attack vectors
- Agent R2: Insider threat scenarios
- Agent R3: Social engineering approaches
- Agent R4: Supply chain attacks
- Agent R5: Advanced persistent threats

Output: Successful breaches, near-misses, blocked attempts

## Round 2

### Blue Team - PATCH
Address Red Team findings:
- Patch each successful breach
- Strengthen near-misses
- Document lessons learned

### Red Team - ATTACK AGAIN
New attack strategies:
- Exploit any remaining weaknesses
- Try new vectors
- Test patches

## Round 3-N: Continue iterations

Until:
- Red Team can't find breaches (defender wins)
- Round limit reached
- Acceptable risk level achieved

## Final Assessment

- **Rounds completed:** [N]
- **Final breaches remaining:** [X]
- **Hardening achieved:** [%]
- **Residual risk:** [Level]
```

### Red/Blue Output Format

```markdown
# Red Team / Blue Team: [Subject]

## Round 1

### Blue Team Defense
[Initial security posture]

### Red Team Attacks
| Attack | Vector | Result | Impact |
|--------|--------|--------|--------|
| SQL Injection | API endpoint | SUCCESS | High |
| Auth bypass | Login | BLOCKED | - |
| Data exfil | Export feature | PARTIAL | Medium |

**Breaches:** 2 successful, 1 partial

---

## Round 2

### Blue Team Patches
| Breach | Patch Applied | Status |
|--------|---------------|--------|
| SQL Injection | Parameterized queries | FIXED |
| Data exfil | Rate limiting + audit | MITIGATED |

### Red Team Counter-Attacks
| Attack | Vector | Result | Impact |
|--------|--------|--------|--------|
| SQL Injection | Different endpoint | BLOCKED | - |
| Timing attack | Auth system | SUCCESS | Medium |
| SSRF | Internal APIs | BLOCKED | - |

**Breaches:** 1 successful (new vector)

---

## Round 3

### Blue Team Patches
[Timing attack fixed]

### Red Team Counter-Attacks
[All major vectors blocked]

**Breaches:** 0 successful

---

## Final Assessment

**Rounds:** 3
**Starting vulnerabilities:** 5
**Final vulnerabilities:** 0 critical, 2 low
**Hardening achieved:** 85%

### Residual Risks (Accepted)
1. Low: [Risk description]
2. Low: [Risk description]

### Defense Improvements Made
1. Parameterized all queries
2. Added rate limiting
3. Implemented timing-safe comparisons
4. Enhanced monitoring
```

---

## Mode Selection Guide

| Scenario | Mode |
|----------|------|
| One-time security audit | Standard Adversarial |
| Ongoing code quality | Immune System |
| Hardening before launch | Red/Blue Team |
| Contract/plan review | Standard Adversarial |
| Continuous monitoring | Immune System |
