import express, { Request, Response } from 'express';
import { addNewRecipe, getRecipes, getSingleRecipe } from '@src/controllers/recipes';

export const recipesRouter = express.Router();

recipesRouter.get('/', async (req: Request, res: Response) => {
    await getRecipes(req, res);
  });

recipesRouter.get('/:id', async (req: Request, res: Response) => {
    await getSingleRecipe(req, res, req.params.id);
  });

recipesRouter.post('/add-new-recipe', async (req: Request, res: Response) => {
    await addNewRecipe(req, res, req.body);
})