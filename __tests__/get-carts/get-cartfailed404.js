const path = require('path');
const get_CartFailed = require('../../collections/get_carts/get_carts.failed404');
const { describe, test } = require('@jest/globals');
const requireAll = require('require-all');


// Pastikan path ke folder `test-data` benar
const getFailed = requireAll({
    dirname: path.join(__dirname, '../../test-data/get_carts/failed404'),
});

describe('Success Get Cart', () => {
    test.each(Object.values(getFailed))(
        "$title", async({ header, body, expected_result }) => {
            const res = await get_CartFailed.getCartFailed(header, body);

            expect(res.status).toBe(expected_result.status_code);
            expect(res.body).toStrictEqual(expected_result.body);
            console.log('Actual Response Body:', res.body);
        }
    );
});
