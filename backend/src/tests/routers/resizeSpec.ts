import supertest from 'supertest';
import express from 'express';
import resizeRouter from '../../routers/resize';

const app = express();
app.use('/', resizeRouter);

const request = supertest(app);

describe('Resize - Endpoint Tests', () => {
  it('should return status 200 when resizing an image from the list', async () => {
    const response = await request.get('/resize/fjord');
    expect(response.status).toBe(200);
  });

  it('should return status 404 when trying to resize an image not from the list', async () => {
    const response = await request.get('/resize/image');
    expect(response.status).toBe(404);
  });
});
