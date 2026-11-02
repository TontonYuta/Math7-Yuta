# Superpowers Engineering Methodology

Guidelines adopted from `obra/superpowers` for all autonomous agent workflows in this repository:

1. **Test-Driven Verification**:
   - Write or update tests before declaring tasks complete.
   - Run tests iteratively until all suites pass green.
2. **Systematic Debugging**:
   - Trace root causes using logs and reproduction steps before modifying code.
   - Avoid guesswork and speculative fixes.
3. **Verification Before Completion**:
   - Execute project build, TypeScript typecheck (`tsc --noEmit`), and E2E browser tests before reporting success.
4. **Execution Discipline**:
   - Follow agreed implementation scope without drift.
   - Keep files modular and strictly below 300 lines per file.
