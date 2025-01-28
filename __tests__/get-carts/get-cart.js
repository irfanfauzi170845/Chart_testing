const path = require('path');
const get_Cart = require('../../collections/get_carts/get_carts.success');
const { describe, test } = require('@jest/globals');
const requireAll = require('require-all');

const getSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/get_carts/success'),
});

describe('Success Get Cart', () => {
    test.each(Object.values(getSuccess))(
        "$title", async({ header, body, expected_result }) => {
            const res = await get_Cart.getCart(header, body);

            expect(res.status).toBe(expected_result.status_code);
            console.log('Actual Response Body:', res.body);
        }
    );
});
