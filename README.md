# NguyenTranTrongNhan
Scoreboard API Service Specification

Overview

This document outlines the specification for the Scoreboard API Service, a backend module responsible for managing user scores and ensuring real-time updates for a scoreboard.

Features

1. Live Scoreboard Updates: The top 10 users' scores are displayed and updated in real-time.

2. Score Increment via API: Users can perform actions that trigger an API request to update their scores.

3. Security Measures: Prevent unauthorized score increments.

API End Point
1. Update Score
   - Endpoint: POST /api/score/update
   - Description: Updates a user's score upon completing an action.
   - Request Body (JSON):
     {
       "user_id": "string",
       "score_increment": "number",
       "auth_token": "string"
     }
   - Response (Success - 200 OK):
     {
      "message": "Score updated successfully",
      "new_score": 200
     }
   - Response (Failure - 401 Unauthorized):
     {
      "error": "Invalid authentication token"
     }
   - Validation & Security Measures:
       - Verify auth_token to prevent unauthorized updates.
       - Ensure score_increment is within an allowed range.
2. Get Scoreboard
   - Endpoint: GET /api/scoreboard
   - Description: Return top 10 user's scores
   - Response: Success - 200 OK
     {
       "score": [
         {"user_id":"u000001","name": "John","score": 100 },
         {"user_id":"u000002","name": "Mark","score": 300 }
         ...
       ]
     }

Execution Flow Diagram

![execution_flow drawio](https://github.com/user-attachments/assets/3a783fab-ace0-42c3-89fe-2ce28ecf5bd2)


Improvements
1. Rate Limiting: Prevent users from spamming score
2. Logging & Monitoring: Track suspicious activities and debug issues.


