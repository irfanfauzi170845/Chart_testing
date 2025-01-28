const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {},
    "body": {},
    "expected_result": {
        "status_code": 201,
        "body": {},
        "json_schema": {}
    }
};

module.exports = test_data;
