const path = require('path');
const deleteitem_CartFailed = require('../../collections/deleteitem_carts/deleteitem_carts.failed404');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const deleteItemFailed = requireAll({
    dirname: path.join(__dirname, '../../test-data/deleteitem_carts/failed404'),
});

const verifier = new Verifier();

describe('Success Delete Item Cart', () => {
    test.each(Object.values(deleteItemFailed))(
        "$title", async ({ header, body, expected_result }) => {
            const res = await deleteitem_CartFailed.deleteItemCartFailed(header, body);

            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
