import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
    private usersList = [{
        username: 'hemangsinha',
        email: 'hemangsinhapassword'
    },
    {
        username: 'hemangdtu',
        email: 'hemangdtupassword'
    }];

    fetchUsers() {
        return this.usersList;
    }

    createUser(userDetails: CreateUserType) {
        this.usersList.push(userDetails);
        return {};
    }

    fetchUserById(id: number) {
        if (id > this.usersList.length - 1) return null;
        return this.usersList[id];
    }
}
