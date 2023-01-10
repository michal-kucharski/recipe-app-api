import { ObjectId } from 'mongodb';

export interface Recipe {
    _id?: ObjectId,
    title: string,
    author: string,
    ingredients: string[],
    instructions: string,
    tags: string[],
    image?: string,
    servings: number
  }