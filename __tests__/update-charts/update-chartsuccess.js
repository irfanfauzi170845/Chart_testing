const path = require('path');
const update_ChartSuccess = require('../../collections/update_charts/update_charts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const Update_ChartSuccess= requireAll({
    dirname: path.join(__dirname, '../../test-data/update_charts/success'),
});

const verifier = new Verifier();

describe('Failed Update Chart', () => {
    test.each(Object.values(Update_ChartSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await update_ChartSuccess.updateChartSuccess(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
