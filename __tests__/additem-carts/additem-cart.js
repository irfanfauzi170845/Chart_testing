const path = require('path');
const additem_Cart = require('../../collections/additem_carts/additem_carts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const addItemSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/additem_carts/success'),
});

const verifier = new Verifier();

describe('Success additem Chart', () => {
    test.each(Object.values(addItemSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await additem_Cart.addItemCart(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
