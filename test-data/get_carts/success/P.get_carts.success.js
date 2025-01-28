const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {},
    "body": {},
    "expected_result": {
        "status_code": 200, 
        "body": {},
        "json_schema": {
            "title": "get-cart",
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
              },
              "additional_discount_percentage": {
                "type": ["string","null"]
              },
              "lat": {
                "type": ["number","null"]
              },
              "lng": {
                "type": ["number","null"]
              },
              "cart_items": {
                "type": "array"
              }
            },
            "required": [
                "id",
                "additional_discount_percentage",
                "lat",
                "lng",
                "cart_items"
            ]
          }
    }
};

module.exports = test_data;
