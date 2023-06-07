import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Idea is to root request with decorators (@get, @post etc.)

// request from the root of our Website
// you-domaine.com/
// if we had @Controller('product')
// it will get request from you-domaine.com/product
@Controller()
export class AppController {
  // means create a new object of the class AppService called appService
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
