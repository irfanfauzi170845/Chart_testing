const path = require('path');
const create_Chart = require('../../collections/create_charts/create_charts.success');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const testDataSuccess = requireAll({
    dirname: path.join(__dirname, '../../test-data/create_charts/success'),
});

const verifier = new Verifier();

let cartId; // Variabel global untuk menyimpan ID Chart

// Gunakan describe.only untuk menjalankan hanya suite ini
describe('Success Create Chart', () => {
    test.each(Object.values(testDataSuccess))(
        "$title", async ({ url, header, body, expected_result }) => {
            // Panggil fungsi createChart dan verifikasi hasilnya
            const res = await create_Chart.createChart(url, header, body);
            verifier.verifyResponse(res, expected_result);

            // Simpan id dari respons body
            cartId = res.body.id;

            console.log('Actual Response Body:', res.body);
        }
    );
});

// Ekspor fungsi untuk mendapatkan cartId yang telah disimpan
function getCartId() {
    return cartId;
}

module.exports = { getCartId };
