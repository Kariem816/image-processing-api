import express from 'express';
import cors from 'cors';
import resize from './routers/resize';
import centerDiv from './utils/centerDiv';
import availableRouter from './routers/avialable';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send(centerDiv('Home Page'));
});

app.use('/', resize);

app.get('/resize', (req, res) => {
  res.status(404).send(centerDiv('Please include a valid filename in the URL'));
});

app.use('/resizeavailable', availableRouter);

app.get('/*', (req, res) => {
  res.status(404).send(centerDiv('404 ERROR'));
});

app.listen(port, () => {
  `Server started on localhost:${port}`;
});

export default app;
