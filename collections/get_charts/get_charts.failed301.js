const RestApiCaller = require('../../callers/rest-api');
const { getCartId } = require('../../__tests__/create-charts/create-chart');

async function getChartFailed(header) {
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
    console.log('GET Chart Response:', res.body);
    return res;
}

module.exports = { getChartFailed };