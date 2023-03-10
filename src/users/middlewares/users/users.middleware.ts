import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Middleware for user called!");

    const { authorization } = req.headers;
    
    if (!authorization) throw new HttpException("No authorization", HttpStatus.FORBIDDEN);
    
    if (authorization === 'hemangserver') next();
    else throw new HttpException("Invalid authorization", HttpStatus.FORBIDDEN);
  }
}
