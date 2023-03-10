import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UserAuthGuard } from 'src/users/guards/user-auth/user-auth.guard';
import { ValidateUserDataPipe } from 'src/users/pipes/validate-user-data/validate-user-data.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseGuards(UserAuthGuard)
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.fetchUsers();
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
    createUser(@Body(ValidateUserDataPipe) userData:CreateUserDto) {
        console.log(userData);
        return this.userService.createUser(userData);
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
        let result = this.userService.fetchUserById(id);
        if(!result) throw new HttpException("User not found!", HttpStatus.BAD_REQUEST);
        return result;
    }
}
