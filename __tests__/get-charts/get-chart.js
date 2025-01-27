const path = require('path');
const get_Chart = require('../../collections/get_charts/get_charts.success');
const { describe, test } = require('@jest/globals');
// const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const getSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/get_charts/success'),
});

describe('Success Get Chart', () => {
    test.each(Object.values(getSuccess))(
        "$title", async({ header, body, expected_result }) => {
            const res = await get_Chart.getChart(header, body);

            expect(res.status).toBe(expected_result.status_code);
            // verifier.verifyResponse(res, expected_result);
            // console.log('Actual Response Body:', res.body);
        }
    );
});
