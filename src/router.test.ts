import request from 'supertest';
import express from 'express';
import router from './router';


const app = express();

app.use(express.json());
app.use(router);


describe('POST /add-athlete', () => {
    it('should return 201 and the new athlete', async () => {
        const response = await request(app)
            .post('/add-athlete')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                dateOfBirth: '1990-01-01',
                collegeId: 1,
                highSchool: 'Springfield High',
                height: 72,
                weight: 180,
                positionFootball: 'QB',
                positionBasketball: 'PG',
            })
            .expect(201);

        expect(response.body).toEqual({
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: '1990-01-01',
            collegeId: 1,
            highSchool: 'Springfield High',
            height: 72,
            weight: 180,
            positionFootball: 'QB',
            positionBasketball: 'PG',
        });
    })

    it('should return 400 if request body is not an object', async () => {
        const response = await request(app)
            .post('/add-athlete')
            .send({})
            .expect(400);

        expect(response.body).toEqual({ message: 'Request body is not an object' });
    })

    it('should return 500 if an error occurs', async () => {
        const response = await request(app)
            .post('/add-athlete')
            // Missing required fields (weight)
            .send({
                firstName: 'John',
                lastName: 'Doe',
                dateOfBirth: '1990-01-01',
                height: 72,
            });

        expect(response.status).toBe(500);
        expect(response.body.message).toEqual('Internal Server Error');
    })
})
