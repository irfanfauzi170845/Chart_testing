const restApiCaller = require('../../callers/rest-api');


async function createCart(header,body) {

    const caller = new restApiCaller({
        url: __URL_TESTINGCHART__,
        endPoint: `/carts`,
        header: header,
        body: body,
    });
    const res = await caller.post()
    return res;
}

module.exports = {createCart}
