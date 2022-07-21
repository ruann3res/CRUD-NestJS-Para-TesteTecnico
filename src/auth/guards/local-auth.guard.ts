import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedInterceptor } from '../../common/errors/interceptors/unauthorized.interceptors';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(error, user) {
    if (error || !user) {
      throw new UnauthorizedInterceptor();
    }

    return user;
  }
}
