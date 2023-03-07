import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [
            {
                username: 'hemangsinha',
                password: 'hemangsinhapassword'
            },
            {
                username: 'hemangdtu',
                password: 'hemangdtupassword'
            }
        ];
    }

    @Get('posts')
    getUserPosts() {
        return [
            {
                post: 'hemangsinha',
                data: 'hemangsinhapassword'
            },
            {
                post: 'hemangdtu',
                data: 'hemangdtupassword'
            }
        ];
    }

    @Post()
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request);
        response.send('Created');
    }
}
