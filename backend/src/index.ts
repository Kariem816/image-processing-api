import express, { json, urlencoded } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload'
import resize from './routers/resize';
import centerDiv from './utils/centerDiv';
import availableRouter from './routers/avialable';
import uploadRouter from './routers/upload';

const app = express();
const port = 3000;

app.use(cors());
app.use(json())
app.use(urlencoded({ extended: true }));
app.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
  useTempFiles: true,
  tempFileDir: './temp'
}))

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send(centerDiv('Home Page'));
});

app.use('/', resize);

app.get('/resize', (req: express.Request, res: express.Response): void => {
  res.status(404).send(centerDiv('Please include a valid filename in the URL'));
});

app.use('/resizeavailable', availableRouter);

app.use("/upload", uploadRouter)

app.get('/*', (req: express.Request, res: express.Response): void => {
  res.status(404).send(centerDiv('404 ERROR'));
});

app.listen(port, (): void => {
  `Server started on localhost:${port}`;
});

export default app;
