FORMAT: 1A

# hello-world-service (v0.1.0)

Tags: node,service 
Endpoint: http://dev.server.at.home/3000 
Contact: orkon 

# Group Hello

All routes related to saying Hello

# GET /hello/:who

Generates a message in the format "Hello :who!"

+ Request

    + Parameters

        + who (string)

+ Response 200 (application/json)

    + Schema

        {
          "$schema": "http://json-schema.org/draft-06/schema#",
          "title": "GetHelloResponse",
          "description": "Describe the response",
          "type": "object",
          "properties": {
            "message": {
              "description": "The \"Hello :who\" message",
              "type": "string"
            }
          },
          "required": [
            "id"
          ]
        }

