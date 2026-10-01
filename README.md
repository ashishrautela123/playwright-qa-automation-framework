# Playwright QA Automation Framework

A portfolio project demonstrating practical QA automation using **JavaScript, Playwright, REST API testing, Page Object Model, GitHub Actions, and failure evidence**.

## Why this project

The framework is designed around a QA mindset:

> What else could go wrong, how can I prove it, and how can I catch it automatically next time?

## Tech Stack

- JavaScript
- Playwright Test
- Page Object Model (POM)
- REST API testing with Playwright APIRequestContext
- Git / GitHub
- GitHub Actions
- HTML reporting
- Screenshots, video and trace evidence

## Coverage

### UI
- Valid login
- Locked-user negative scenario
- Product sorting
- Add product to cart
- Checkout
- Order completion

### API
- GET response validation
- HTTP status validation
- Response header validation
- JSON schema/property validation
- POST request validation
- Negative API scenario

### Engineering Practices

- Reusable Page Objects
- Centralized test data
- Tags for smoke/regression execution
- Retries in CI
- Failure screenshots
- Trace retention
- HTML reports
- CI artifact upload

## Project Structure

```text
pages/       Page Object classes
tests/ui/    UI automation
tests/api/   REST API tests
utils/       Test data and helpers
.github/     GitHub Actions workflow
```

## Run Locally

```bash
npm install
npx playwright install chromium
npm test
```

Run only smoke tests:

```bash
npm run test:smoke
```

Run API tests:

```bash
npm run test:api
```

Open the report:

```bash
npm run report
```

## CI/CD

Every push and pull request to `main` triggers GitHub Actions.

The pipeline:
1. Checks out the repository.
2. Installs Node dependencies.
3. Installs Playwright.
4. Executes automated tests.
5. Uploads HTML reports.
6. Uploads failure evidence.

## AI-Assisted Engineering

AI can be used during development for:
- Generating initial test scenarios
- Suggesting Playwright locators
- Debugging failed tests
- Generating boundary/negative cases
- Improving reusable utilities

AI output must be reviewed against the application behavior, requirements, API contract, and test results before being accepted.

## Bug Investigation Example

See [`bug-report.md`](./bug-report.md) for an example of investigating duplicate order creation after a retry.

The scenario demonstrates:
- Reproduction steps
- Expected vs actual behavior
- Evidence collection
- Severity/priority reasoning
- Automation strategy

## Future Enhancements

- SQL/database validation
- Webhook testing
- Authentication token fixtures
- Contract/schema validation
- Performance smoke tests
- Security-focused API checks
- Jenkins pipeline
