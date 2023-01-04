import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
