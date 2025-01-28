const { getCartId } = require('../../__tests__/create-carts/create-cart');
const RestApiCaller = require('../../callers/rest-api');

async function updateCartFailed(header, body) {
    const cartId = getCartId(); // Nilai parameter
    const endPoint = `/carts/${cartId}/product/quantity/`; 


    const caller = new RestApiCaller({
        url: __URL_TESTINGCHART__, // URL dasar
        endPoint: endPoint,        // Endpoint lengkap
        header: {
            'accept': 'application/json',
            ...header,             // Header tambahan dari input
        },
        body: JSON.stringify(body), // Konversi body ke JSON string
    });

    const res = await caller.put(); // Melakukan POST request
    return res;
}

module.exports = {updateCartFailed};
