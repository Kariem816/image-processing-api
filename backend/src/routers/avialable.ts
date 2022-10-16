import express from 'express';

import fs from 'fs';

const availableRouter = express.Router();

availableRouter.get(
  '/',
  async (req: express.Request, res: express.Response) => {
    fs.readdir('./src/images', (err, files) => {
      const imgArr = files.map((file) => file.split('.')[0]);
      res.send(JSON.stringify(imgArr));
    });
  }
);

export default availableRouter;
