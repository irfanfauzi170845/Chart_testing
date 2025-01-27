const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {}, // Header tambahan jika diperlukan
    "body": {
        "product_id": "123",
        "quantity": 5
    },
    "expected_result": {
        "status_code": 405, 
        "body": {
            "message": 'Method is not allowed for the requested route',
        },
        "json_schema": {}
    }
};

module.exports = test_data;
