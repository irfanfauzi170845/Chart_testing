const restApiCaller = require('../../callers/rest-api');

async function createChartFailed(header,body) {
    const endPoint = `/carts/abc`;

    const caller = new restApiCaller({
        url: __URL_TESTINGCHART__,
        endPoint: endPoint,
        header: header,
        body: body,
    });
    const res = await caller.post()
    return res;
}

module.exports = {createChartFailed}
