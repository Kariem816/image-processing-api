import express from 'express';

import resizeImg from '../utils/resizeImg';
import checkIfFileExists from '../utils/checkIfFileExists';
import path from 'path';
import centerDiv from '../utils/centerDiv';

const resizeRouter = express.Router();

resizeRouter.get(
  '/resize/:imgname/:width?/:height?',
  async (req: express.Request, res: express.Response) => {
    const imgName: string = req.params.imgname;
    const newWidth: number = parseInt(req.params.width) || 320;
    const newHeight: number = parseInt(req.params.height) || newWidth;

    if (!checkIfFileExists(`./src/images/${imgName}.jpg`)) {
      console.log(`no image with name: '${imgName}' was found`);
      res
        .status(404)
        .send(
          centerDiv(
            'No image with this name was found<br/>Please enter a valid filename in the URL'
          )
        );
    } else if (
      !checkIfFileExists(`images_out/${imgName}_${newWidth}_${newHeight}.png`)
    ) {
      console.log('Now resizing...');
      await resizeImg(imgName, newWidth, newHeight);
      res.sendFile(`${imgName}_${newWidth}_${newHeight}.png`, {
        root: path.join(__dirname, '../../images_out'),
      });
    } else {
      console.log('This image with this size already existed');
      res.sendFile(`${imgName}_${newWidth}_${newHeight}.png`, {
        root: path.join(__dirname, '../../images_out'),
      });
    }
  }
);

export default resizeRouter;
