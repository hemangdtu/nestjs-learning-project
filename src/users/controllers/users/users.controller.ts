import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
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
    getUserPosts(@Query('sortDesc', ParseBoolPipe) sortBy: boolean) {
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
    @UsePipes(new ValidationPipe())
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
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return {id};
    }
}
