const path = require('path');
const update_ChartFailed = require('../../collections/update_charts/update_charts.failed301');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const updateChartFailed= requireAll({
    dirname: path.join(__dirname, '../../test-data/update_charts/failed301'),
});

const verifier = new Verifier();

describe('Failed Update Chart', () => {
    test.each(Object.values(updateChartFailed))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await update_ChartFailed.updateChartFailed(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
