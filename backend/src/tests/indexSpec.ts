import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Index - Endpoint Tests', () => {
  it('should return status 200 on index path', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('should return status 404 when trying to access any other endpoint (1)', async () => {
    const response = await request.get('/udacity');
    expect(response.status).toBe(404);
  });

  it('should return status 404 when trying to access any other endpoint (1)', async () => {
    const response = await request.get('/resize/fjord/300/600/900');
    expect(response.status).toBe(404);
  });
});
