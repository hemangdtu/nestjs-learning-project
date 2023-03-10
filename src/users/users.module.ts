import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersAuthMiddleware } from './middlewares/users-auth/users-auth.middleware';
import { UsersMiddleware } from './middlewares/users/users.middleware';
import { UsersService } from './services/users/users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(UsersMiddleware).forRoutes(UsersController)
            .apply(UsersAuthMiddleware).forRoutes(UsersController);
    }
}
