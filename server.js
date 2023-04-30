import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import generateAction from './src/components/api/generate';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/generate', generateAction);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});