const { matchers } = require('jest-json-schema');
expect.extend(matchers);

class Verifier {
    constructor() {
    }

    verifyResponse(actual, expected) {
        expect(actual.statusCode, JSON.stringify(actual.body)).toEqual(expected.status_code)
        expect(actual.body).toMatchObject(expected.body)
        expect(actual.body).toMatchSchema(expected.json_schema)
    }

    verifySuccessGrpc(actual, expected) {
        expect(actual).toMatchObject(expected.body)
        expect(actual).toMatchSchema(expected.json_schema)
    }

    verifyFailGrpc(actual, expected) {
        expect(actual.details).toEqual(expected.body)
        expect(actual.code).toEqual(expected.status_code)
    }
}

module.exports = Verifier
