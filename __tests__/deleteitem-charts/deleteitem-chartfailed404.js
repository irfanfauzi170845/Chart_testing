const path = require('path');
const deleteitem_ChartFailed = require('../../collections/deleteitem_charts/deleteitem_charts.failed404');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const deleteItemFailed = requireAll({
    dirname: path.join(__dirname, '../../test-data/deleteitem_charts/failed404'),
});

const verifier = new Verifier();

describe('Success Delete Item Chart', () => {
    test.each(Object.values(deleteItemFailed))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await deleteitem_ChartFailed.deleteItemChartFailed(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
