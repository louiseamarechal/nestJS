import { Injectable, Req } from "@nestjs/common";
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
// import { User, Bookmark } from '@prisma/client'

// service handles the logic
@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) {}

    signup(@Req() req: Request) {

        return { msg: 'I have signed up' };
    }
    
    signin() {
        return { msg: 'I have signed in' };
    }


}