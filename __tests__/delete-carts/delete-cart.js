const path = require('path');
const delete_Cart = require('../../collections/delete_carts/delete_carts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const deleteCartSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/delete_carts/success'),
});

const verifier = new Verifier();

describe('Success Delete Cart', () => {
    test.each(Object.values(deleteCartSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await delete_Cart.deleteCart(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
