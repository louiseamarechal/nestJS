import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  const corsOptions: CorsOptions = {
    allowedHeaders: ['content-type', 'Authorization'],
    credentials: true,
    origin: ['http://localhost:3000'],
  }
  app.enableCors(corsOptions);
  await app.listen(3333);
}
bootstrap();
