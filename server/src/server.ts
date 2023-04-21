import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(port, '0.0.0.0', () => {
  console.log('server running');
});