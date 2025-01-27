const path = require('path');
const get_ChartFailed = require('../../collections/get_charts/get_charts.failed404');
const { describe, test } = require('@jest/globals');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const getFailed = requireAll({
    dirname: path.join(__dirname, '../../test-data/get_charts/failed404'),
});

describe('Success Get Chart', () => {
    test.each(Object.values(getFailed))(
        "$title", async({ header, body, expected_result }) => {
            const res = await get_ChartFailed.getChartFailed(header, body);

            expect(res.status).toBe(expected_result.status_code);
            // console.log('Actual Response Body:', res.body);
        }
    );
});
