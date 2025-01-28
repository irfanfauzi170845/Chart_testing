const path = require('path');
const update_CartFailed = require('../../collections/update_carts/update_carts.failed404');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const updateCartFailed= requireAll({
    dirname: path.join(__dirname, '../../test-data/update_carts/failed404'),
});

const verifier = new Verifier();

describe('Failed Update Cart', () => {
    test.each(Object.values(updateCartFailed))(
        "$title", async ({ header, body, expected_result }) => {
            const res = await update_CartFailed.updateCartFailed(header, body);

            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
