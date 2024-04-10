import request from 'supertest';
import app from './server';

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should return "Hello World"', async () => {
        const response = await request(app).get('/');
        expect(response.body.message).toBe('Hello World');
    });
});
