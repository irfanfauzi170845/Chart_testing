const path = require('path');
const deleteitem_Cart = require('../../collections/deleteitem_carts/deleteitem_carts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const deleteItemSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/deleteitem_carts/success'),
});

const verifier = new Verifier();

describe('Success Delete Item Cart', () => {
    test.each(Object.values(deleteItemSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            const res = await deleteitem_Cart.deleteItemCart(header, body);

            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
