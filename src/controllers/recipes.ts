import { Request, Response } from 'express';
import { recipes } from '@src/utils/db';
import { ObjectId } from 'mongodb';
import { Recipe } from '@src/models/recipe';

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const results: Recipe[] = await recipes.find().toArray();
        if (results) {
            res.send(results);
        } else {
            res.status(404).send({ message: 'There is no recipes' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error retrieving data' });
    }
}

export const getSingleRecipe = async (req: Request, res: Response, id: string) => {
    const objectId = new ObjectId(id)
    try {
        const results: Recipe = await recipes.findOne({ _id: objectId });
        if (results) {
            res.send(results);
        } else {
            res.status(404).send({ message: 'Recipe not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error retrieving data' });
    }
}

export const addNewRecipe = async (req: Request, res: Response, newRecipe: Recipe) => {
    try {
        const result = await recipes.insertOne(newRecipe);
        res.send(result);
    } catch (error) {
        res.status(500).send({ message: 'Cannot save new recipe' });
    }
}