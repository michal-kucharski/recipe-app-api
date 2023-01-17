import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from "crypto";
import { users } from '@src/utils/db';
import { User } from '@src/models/user';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const isUserExist = await users.findOne({email: req.body.email})
        if (isUserExist) {
            res.status(400).send({ message: 'Registration failed, please try again.' });
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user: User = {
                email: String(req.body.email),
                password: hashedPassword
            };
            const result = await users.insertOne(user);
            res.status(201).json('User added successfully.');
        }
    } catch (error) {
        res.status(500).send({ message: 'Cannot create user, please try again in a few minutes.' });
    }
}

export const login =  async (req: Request, res: Response) => {
    const secret = crypto.randomBytes(64).toString("hex");
    try {
        const user = await users.findOne(
            { 
                email: String(req.body.email) 
            });
        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
        return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ email: user.email }, secret, {
        expiresIn: "7d"
        });

        res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};