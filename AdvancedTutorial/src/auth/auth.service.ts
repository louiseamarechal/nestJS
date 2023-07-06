import { ForbiddenException, Injectable, Req } from "@nestjs/common";
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2' // argon is for the passwrd hash
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Prisma } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
// import { User, Bookmark } from '@prisma/client'

// service handles the logic
@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
        ) {}

    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);

        // save the new user in the db
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            });
    
            delete user.hash; // to remove the hash from the db
    
            // return the saved user
            return this.signToken(user.id, user.email);
        } catch(error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                // P2002 = code for the violated unique field
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials is taken',);
                } 
            }
            throw error;
        }
    }
    
    async signin(dto: AuthDto) {
        // find user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });

        // if user doesn't exist throw exception
        if (!user)
            throw new ForbiddenException('Credentials incorrect',);

        // compare passwrd
        const pwMatches = await argon.verify(user.hash, dto.password,);

        if (!pwMatches)
            throw new ForbiddenException('Credentials incorrect');

        delete user.hash;
        // if passwrd incorrect throw excepetion

        // return user
        return this.signToken(user.id, user.email);
    }

    async signToken(userId: number, email: string): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
        };

        const secret = this.config.get('JWT_SECRET')

        const token = await this.jwt.signAsync(
            payload,
            {
                expiresIn: '15m', //user can user the token on the platfoirm for 15min and then needs to singin again
                secret: secret,
            },
        );

        console.log({
            access_token: token,
        });
        return {
            access_token: token,
        };
    }
}