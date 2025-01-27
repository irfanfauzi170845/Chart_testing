const path = require('path');
const create_ChartFailed = require('../../collections/create_charts/create_charts.failed404');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const testDataSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/create_charts/failed404'),
});

const verifier = new Verifier();

let cartId;


describe('Failed Create Chart', () => {
    test.each(Object.values(testDataSuccess))(
        "$title", async ({ url, header, body, expected_result }) => {

            const res = await create_ChartFailed.createChartFailed(url, header, body)

            cartId = res.body.id;

            console.log('Actual Response Body:', res.body);
            verifier.verifyResponse(res, expected_result);
        }
    );

});

// Ekspor fungsi untuk mendapatkan cartId yang telah disimpan
function getCartId() {
    return cartId;
}

module.exports = { getCartId };
