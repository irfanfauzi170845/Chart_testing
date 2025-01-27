const path = require('path');
const additem_ChartFailed = require('../../collections/additem_charts/additem_charts.failed404');
const { describe, test } = require('@jest/globals');
const Verifier = require('../../utilities/verifier');
const requireAll = require('require-all');

const addItemFailed = requireAll({
    dirname: path.join(__dirname, '../../test-data/additem_charts/failed404'),
});

const verifier = new Verifier();

describe('Failed additem Chart', () => {
    test.each(Object.values(addItemFailed))(
        "$title", async ({ header, body, expected_result }) => {

            const res = await additem_ChartFailed.addItemChartFailed(header, body);

            expect(res.status).toBe(expected_result.status_code);
            verifier.verifyResponse(res, expected_result);
            console.log('Actual Response Body:', res.body);
        }
    );
});
