const path = require('path');
const delete_Chart = require('../../collections/delete_charts/delete_charts.failed404');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const deleteChartSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/delete_charts/failed404'),
});

const verifier = new Verifier();

describe('Success Delete Chart', () => {
    test.each(Object.values(deleteChartSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await delete_Chart.deleteChart(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
