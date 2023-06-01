import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

// controller handle the request
// 'auth' will be the prefix of our Routes
@Controller('auth')
export class AuthController {
    // we instantiate our class 'AuthService' as 'authService'
    constructor(private authService: AuthService) {}

    // /auth/signup => will be using POST request
    // data transfer object (dto)
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup();
    }
    
    // /auth/signin => will be using POST request
    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}