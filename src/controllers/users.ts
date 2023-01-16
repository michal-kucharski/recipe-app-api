import { Request, Response } from 'express';
const bcrypt = require('bcryptjs');
import * as jwt from 'jsonwebtoken';
import { users } from '@src/utils/db';
import { ObjectId } from 'mongodb';
import { User } from '@src/models/user';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            email: req.body.email,
            password: hashedPassword
        };
        const result = await users.insertOne(user);
        res.status(201).json('User added successfully');
    } catch (error) {
        res.status(500).send({ message: 'Cannot create user' });
    }
}