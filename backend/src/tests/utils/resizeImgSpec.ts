import app from '../..';
import checkIfFileExists from '../../utils/checkIfFileExists';
import supertest from 'supertest';

const request = supertest(app);

describe('Image Processing Tests', () => {
  it('should place the resized image in images_out dir', async (): Promise<void> => {
    await request.get('/resize/fjord');
    const isResized = checkIfFileExists('images_out/fjord_320_320.png');
    expect(isResized).toBe(true);
  });

  it('should name the processed image based on its width and height', async (): Promise<void> => {
    await request.get('/resize/fjord/1366/768');
    const isNamedCorrect = checkIfFileExists('./images_out/fjord_1366_768.png');
    expect(isNamedCorrect).toBe(true);
  });
});
