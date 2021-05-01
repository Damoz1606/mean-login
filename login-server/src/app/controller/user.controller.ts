import { Request, Response, NextFunction } from 'express';

import User from '../model/user';
import jwt from 'jsonwebtoken'

export async function signup(req:Request, res:Response) {
    try {
        const user = await User.create(req.body);
        const token = jwt.sign({_id: user._id}, 'secretKey');
        return res.status(200).json({
            message: "Success",
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function signin(req:Request, res:Response) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email, password });
        if(!user){
            return res.status(400).json({
                message: "User doesn't exists"
            });
        }

        const token = jwt.sign({_id: user._id}, 'secretKey');
        return res.status(200).json({
            message: "Success",
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function getTasks(req:Request, res:Response) {    
    try {
        return res.status(200).json([
            {
            _id: 1,
            name: "Task One",
            description: "Lorem Ipsum",
            date: "2020-01-01"
            },
            {
                _id: 2,
                name: "Task One",
                description: "Lorem Ipsum",
                date: "2020-01-01"
            },
            {
                _id: 3,
                name: "Task One",
                description: "Lorem Ipsum",
                date: "2020-01-01"
            }
        ]);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function profile(req:Request, res:Response) {
    res.send(req.userId);
}

export async function getPrivateTasks(req:Request, res:Response) {    
    try {
        return res.status(200).json([
            {
            _id: 1,
            name: "Private One",
            description: "Lorem Ipsum",
            date: "2020-01-01"
            },
            {
                _id: 2,
                name: "Private One",
                description: "Lorem Ipsum",
                date: "2020-01-01"
            },
            {
                _id: 3,
                name: "Private One",
                description: "Lorem Ipsum",
                date: "2020-01-01"
            }
        ]);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export function verifyToken(req:Request, res:Response, next: NextFunction) {
    if(!req.headers.authorization){
        return res.status(401).send("Un-authorize Request");
    }

    let token = <string>req.headers.authorization;
    token = token.split(' ')[1];
    if(!token){
        return res.status(401).send("Un-authorize Request");
    }
    try {
        const payload = <JWTObj>jwt.verify(token, 'secretKey');
        req.userId = payload._id;
    } catch (error) {
        res.sendStatus(401);
    }
    next();
}

interface IUser{
    _id: string,
    email: string,
    password: string
}

interface JWTObj{
    _id: string,
    iat: number
}