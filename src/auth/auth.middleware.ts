// src/auth/auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtConstants } from './constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('Unauthorized');

    try {
      const decoded = jwt.verify(token, jwtConstants.secret);
      req.user = decoded;
      next();
    } catch (err: any) {
      console.log(err);
      return res.status(401).send('Invalid token');
    }
  }
}
