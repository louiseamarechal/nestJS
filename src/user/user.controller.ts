import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    
    // Route level
    // /users/me
    @UseGuards(AuthGuard('jwt')) // using guards to make sure a user is allowed to access the page thanks to Json Web Token
    @Get('me')
    getMe() {
        return ("user info");
    }
}
