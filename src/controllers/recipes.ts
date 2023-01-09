import { Request, Response } from 'express';
import { recipes } from '@src/utils/db';
import { ObjectId } from 'mongodb';

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const results = await recipes.find().toArray();
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
        const results = await recipes.findOne({ _id: objectId });
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