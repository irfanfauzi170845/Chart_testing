const RestApiCaller = require('../../callers/rest-api');
const { getCartId } = require('../../__tests__/create-charts/create-chart');

async function deleteChart(header, body) {
    const cartId = getCartId();
    const endPoint = `/carts/${cartId}/abc`; 


    const caller = new RestApiCaller({
        url: __URL_TESTINGCHART__, // URL dasar
        endPoint: endPoint,        // Endpoint lengkap
        header: {
            'accept': 'application/json',
            ...header,             // Header tambahan dari input
        },
        body: JSON.stringify(body), // Konversi body ke JSON string
    });

    const res = await caller.del(); // Melakukan POST request
    return res;
}

module.exports = { deleteChart };
