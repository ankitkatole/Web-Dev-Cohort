import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

export const userMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers['authorization']; // Extract token from Authorization header
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' }); // No token provided
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
        //@ts-ignore 
        req.userId = decoded.id; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    }else{
        return res.status(403).json({ message: 'Forbidden' }); // Invalid token
    }
}