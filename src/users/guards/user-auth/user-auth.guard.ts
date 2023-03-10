import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class UserAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Can be used to compare user roles, etc.
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.headers);
    
    return true;
  }
}
