import express, { Request, Response } from 'express';
import { db } from './utils/db';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

(async() => {
  const results = await db.collection("recipes").find().toArray();
  console.log(results);
})();
