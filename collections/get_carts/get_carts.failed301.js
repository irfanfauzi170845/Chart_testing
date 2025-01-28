const RestApiCaller = require('../../callers/rest-api');
const { getCartId } = require('../../__tests__/create-carts/create-cart');

async function getCartFailed(header) {
    const cartId = getCartId();
    const endPoint = `/carts/${cartId}/`;

    const caller = new RestApiCaller({
        url: __URL_TESTINGCHART__, 
        endPoint: endPoint,
        header: {
            'accept': 'application/json',
            ...header, 
        },
    });

    const res = await caller.get();
    console.log('GET Cart Response:', res.body);
    return res;
}

module.exports = { getCartFailed };