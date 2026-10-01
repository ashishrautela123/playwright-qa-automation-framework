# Sample Independent Bug Report

## Bug: Duplicate Order Creation After Repeated Request

**Severity:** High  
**Priority:** High  
**Area:** Order Management / API  
**Type:** Integration / Reliability

### Preconditions
- User is authenticated.
- Order creation endpoint is available.
- Client can retry a request after a simulated network interruption.

### Steps to Reproduce
1. Send `POST /api/orders` with a valid order payload.
2. Capture the successful response.
3. Simulate a client timeout after the server accepts the request.
4. Retry the same request with the same logical order.
5. Query the order list.

### Expected Result
The retry should not create a second order. The API should use idempotency handling or return the existing order associated with the original request.

### Actual Result
Two orders can be created for the same logical request when the client retries after an ambiguous network result.

### Evidence to Collect
- Request and response payloads
- HTTP status codes
- Request timestamp
- Correlation/request ID
- Order IDs
- Server/application logs
- Database record count

### Why This Matters
Duplicate orders can create incorrect business state and require manual reconciliation.

### Automation Idea
Add an API test that:
1. Sends the same logical request twice.
2. Verifies the server's idempotency behavior.
3. Confirms that only one order exists.

> Note: This document is an example defect investigation scenario for the portfolio. It is not a claim that the public demo application used by this repository contains this defect.
