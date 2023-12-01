// Existing imports...

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: any; // Define the user property
        }
    }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        console.log('Unauthorized: No token provided');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
        if (err) {
            console.log('Forbidden: Token verification failed');
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        console.log('User authenticated:', user);
        next();
    });
};

