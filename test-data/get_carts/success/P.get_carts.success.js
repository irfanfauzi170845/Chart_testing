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
        "status_code": 200, 
        "body": {},
        "json_schema": {}
    }
};

module.exports = test_data;
