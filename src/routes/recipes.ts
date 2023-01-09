import express, { query, Request, Response } from 'express';
import { getRecipes, getSingleRecipe } from '@src/controllers/recipes';

export const recipesRouter = express.Router();

recipesRouter.get('/', async (req: Request, res: Response) => {
    await getRecipes(req, res);
  });

recipesRouter.get('/:id', async (req: Request, res: Response) => {
    await getSingleRecipe(req, res, req.params.id);
  });