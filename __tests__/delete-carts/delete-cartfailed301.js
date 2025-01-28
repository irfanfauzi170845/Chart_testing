const path = require('path');
const delete_Cart = require('../../collections/delete_carts/delete_carts.failed301');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');


const deleteCartSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/delete_carts/failed301'),
});

const verifier = new Verifier();

describe('Success Delete Cart', () => {
    test.each(Object.values(deleteCartSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            const res = await delete_Cart.deleteCart(header, body);
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
