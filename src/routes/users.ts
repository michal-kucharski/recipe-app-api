import express, { Request, Response } from 'express';
import { registerUser } from '@src/controllers/users';

export const usersRouter = express.Router();

usersRouter.post('/register', async (req: Request, res: Response) => {
    await registerUser(req, res);
  });

// usersRouter.post('/login', async (req: Request, res: Response) => {
//     await loginUser(req, res);
//   });