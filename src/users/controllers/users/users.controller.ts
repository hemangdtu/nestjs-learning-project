import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

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

    // Query Parameters
    @Get('posts')
    getUserPosts(@Query('sortBy') sortBy: string) {
        console.log(sortBy);

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

    // Classic Express Way
    // @Post()
    // createUser(@Req() request: Request, @Res() response: Response) {
    //     console.log(request);
    //     response.send('Created');
    // }

    // Request Body
    @Post('create')
    createUser(@Body() userData:CreateUserDto) {
        console.log(userData);
        return {};
    }

    // Classic Express Way
    // @Get(':id')
    // getUserById(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.params);
    //     response.send('');
    // }

    // Route Parameters
    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log(id);
        return {id};
    }
}
