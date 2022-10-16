import supertest from 'supertest';
import express from 'express';
import avaialbleRouter from '../../routers/avialable';

const app = express();
app.use('/resizeavailable', avaialbleRouter);

const request = supertest(app);

describe('Available - Endpoint Tests', () => {
  it('should return an array containing available images', async () => {
    const response = await request.get('/resizeavailable');
    // const data = await response.json()
    const data = JSON.parse(response.text);
    expect(data).toContain('fjord');
  });
});
