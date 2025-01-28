const RestApiCaller = require('../../callers/rest-api');
const { getCartId } = require('../../__tests__/create-carts/create-cart');

async function deleteCart(header, body) {
    const cartId = getCartId();
    const endPoint = `/carts/${cartId}`;    


    const caller = new RestApiCaller({
        url: __URL_TESTINGCHART__,
        endPoint: endPoint,
        header: {
            'accept': 'application/json',
            ...header,
        },
        body: JSON.stringify(body),
    });

    const res = await caller.del();
    return res;
}

module.exports = { deleteCart };
