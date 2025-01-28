const path = require('path');
const create_Cart = require('../../collections/create_carts/create_carts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const testDataSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/create_carts/success'),
});

const verifier = new Verifier();

let cartId;


describe('Success Create Cart', () => {
    test.each(Object.values(testDataSuccess))(
        "$title", async ({ url, header, body, expected_result }) => {
            const res = await create_Cart.createCart(url, header, body);
            verifier.verifyResponse(res, expected_result);

            cartId = res.body.id;
            console.log('Actual Response Body:', res.body);
        }
    );
});

function getCartId() {
    return cartId;
}

module.exports = { getCartId };
