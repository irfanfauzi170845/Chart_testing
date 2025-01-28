const path = require('path');
const additem_CartFailed = require('../../collections/additem_carts/additem_carts.failed404');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const addItemFailed = requireAll({
    dirname: path.join(__dirname, '../../test-data/additem_carts/failed404'),
});

const verifier = new Verifier();

describe('Failed additem Cart', () => {
    test.each(Object.values(addItemFailed))(
        "$title", async ({ header, body, expected_result }) => {

            const res = await additem_CartFailed.addItemCartFailed(header, body);

            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
