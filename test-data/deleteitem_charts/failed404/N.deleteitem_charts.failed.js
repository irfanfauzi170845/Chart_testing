const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {}, // Header tambahan jika diperlukan
    "body": {},
    "expected_result": {
        "status_code": 404, 
        "body": {},
        "json_schema": {}
    }
};

module.exports = test_data;
