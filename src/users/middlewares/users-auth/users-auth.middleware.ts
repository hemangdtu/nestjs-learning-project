import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UsersAuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("User Auth Middleware called!");
    
    next();
  }
}
