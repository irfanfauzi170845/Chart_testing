const request = require('supertest');

class RestApiCaller {
    constructor(object) {
        this.url = object.url;
        this.endPoint = object.endPoint;
        this.header = object.header || {};
        this.param = object.param || {};
        this.body = object.body || {};
    }

    setHeader(key, value) {
        this.header[key] = value;
    }

    setBody(key, value) {
        this.body[key] = value;
    }

    post() {
        return request(this.url)
            .post(this.endPoint)
            .set(this.header)
            .send(this.body)
            .query(this.param);
    }

    get() {
        return request(this.url)
            .get(this.endPoint)
            .set(this.header)
            .send(this.body)
            .query(this.param);
    }

    patch() {
        return request(this.url)
            .patch(this.endPoint)
            .set(this.header)
            .send(this.body)
            .query(this.param);
    }
    put() {
        return request(this.url)
            .put(this.endPoint)
            .set(this.header)
            .send(this.body)
            .query(this.param);
    }

    del() {
        return request(this.url)
            .del(this.endPoint)
            .set(this.header)
            .send(this.body)
            .query(this.param);
    }
}

module.exports = RestApiCaller;
