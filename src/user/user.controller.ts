import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    
    // Route level
    // /users/me
    @UseGuards(JwtGuard) // using guards to make sure a user is allowed to access the page thanks to Json Web Token
    @Get('me')
    //, @GetUser('email') email: string
    getMe(@GetUser() user: User) {
        // console.log({email});
        return user;
    }

    @Patch()
    editUser() {}
}
