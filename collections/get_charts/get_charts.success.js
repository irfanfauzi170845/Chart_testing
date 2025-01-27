const RestApiCaller = require('../../callers/rest-api');
const { getCartId } = require('../../__tests__/create-charts/create-chart'); // Import fungsi getCartId dari Code 1

async function getChart(header) {
    const cartId = getCartId (); // Ambil nilai cartId dari Code 1
    const endPoint = `/carts/${cartId}`; // Endpoint lengkap

    const caller = new RestApiCaller({
        url: __URL_TESTINGCHART__, // URL dasar
        endPoint: endPoint,        // Endpoint lengkap
        header: {
            'accept': 'application/json',
            ...header,             // Header tambahan dari input
        },
    });

    const res = await caller.get(); // Melakukan GET request
    console.log('GET Chart Response:', res.body);
    return res;
}

module.exports = { getChart };