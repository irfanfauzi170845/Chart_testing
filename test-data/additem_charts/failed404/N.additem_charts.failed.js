const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {}, // Header tambahan jika diperlukan
    "body": {
        "product_id": "123",
        "quantity": 2
    },
    "expected_result": {
        "status_code": 404, 
        "body": {
            "message": 'Cart not found',
        },
        "json_schema": {}
    }
};

module.exports = test_data;
