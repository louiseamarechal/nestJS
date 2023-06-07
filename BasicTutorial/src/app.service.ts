import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello() return type: string
  getHello(): string {
    return 'Hello World!';
  }
}
