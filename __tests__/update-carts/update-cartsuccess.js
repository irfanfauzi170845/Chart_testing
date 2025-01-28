const path = require('path');
const update_CartSuccess = require('../../collections/update_carts/update_carts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const Update_CartSuccess= requireAll({
    dirname: path.join(__dirname, '../../test-data/update_carts/success'),
});

const verifier = new Verifier();

describe('Failed Update Cart', () => {
    test.each(Object.values(Update_CartSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await update_CartSuccess.updateCartSuccess(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
