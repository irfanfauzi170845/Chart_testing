const { getCartId } = require('../../__tests__/create-carts/create-cart');
const RestApiCaller = require('../../callers/rest-api');

async function updateCartFailed(header, body) {
    const cartId = getCartId();
    const endPoint = `/carts/${cartId}/product/quantity/`; 


    const caller = new RestApiCaller({
        url: __URL_TESTINGCHART__,
        endPoint: endPoint,
        header: {
            'accept': 'application/json',
            ...header,
        },
        body: JSON.stringify(body),
    });

    const res = await caller.put();
    return res;
}

module.exports = {updateCartFailed};
