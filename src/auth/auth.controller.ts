import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

// controller handle the request
// 'auth' will be the prefix of our Routes
@Controller('auth')
export class AuthController {
    // we instantiate our class 'AuthService' as 'authService'
    constructor(private authService: AuthService) {}

    // /auth/signup => will be using POST request
    @Post('signup')
    signup() {
        return this.authService.signup();
    }
    
    // /auth/signin => will be using POST request
    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}