const path = require('path');
const update_CartSuccess = require('../../collections/update_carts/update_carts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const Update_CartSuccess= requireAll({
    dirname: path.join(__dirname, '../../test-data/update_carts/success'),
});

const verifier = new Verifier();

describe('Failed Update Cart', () => {
    test.each(Object.values(Update_CartSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            const res = await update_CartSuccess.updateCartSuccess(header, body);

            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
