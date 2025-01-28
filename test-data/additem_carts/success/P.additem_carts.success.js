const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {},
    "body": {
        "product_id": "123",
        "quantity": 2
    },
    "expected_result": {
        "status_code": 201, 
        "body": {},
        "json_schema": {
            "title": "additem-cartsuccess",
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              }
            },
            "required": ["id"]
          }
    }
};

module.exports = test_data;
