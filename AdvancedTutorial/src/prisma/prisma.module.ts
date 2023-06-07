import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // this decorator makes the module available in all our App (no need to import it on all files)
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
