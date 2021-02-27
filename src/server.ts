import express from 'express';
import routes from './routes'
const app = express();

app.listen(3333, () => console.log("Server is running!"))
