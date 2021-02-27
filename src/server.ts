import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database';

const app = express();

app.get('/users', (resquest, response) => {
  return response.json({ message: 'Hello World - NLW4' });
});

app.post('/', (resquest, response) => {
  return response.json({ message: 'Os dados foram salvos com sucesso' });
});

app.listen(3333, () => console.log('Server is running!'));
