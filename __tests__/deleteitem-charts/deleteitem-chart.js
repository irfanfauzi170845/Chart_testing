const path = require('path');
const deleteitem_Chart = require('../../collections/deleteitem_charts/deleteitem_charts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

// Pastikan path ke folder `test-data` benar
const deleteItemSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/deleteitem_charts/success'),
});

const verifier = new Verifier();

describe('Success Delete Item Chart', () => {
    test.each(Object.values(deleteItemSuccess))(
        "$title", async ({ header, body, expected_result }) => {
            // Panggil fungsi `addItemChart` dan dapatkan respons
            const res = await deleteitem_Chart.deleteItemChart(header, body);

            // Verifikasi status code
            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
