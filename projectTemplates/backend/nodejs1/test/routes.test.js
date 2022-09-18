const request = require('supertest');
const express = require('express');
const router = require('../src/routes');

const app = new express();
app.use('/', router);

describe('Server routes', function () {

    test('responds to /hello/Magali', async () => {
        const res = await request(app).get('/hello/Magali');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('hello Magali!');
    });

});