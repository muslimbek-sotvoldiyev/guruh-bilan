import { Module } from '@nestjs/common';
import { AbdullohService } from './abdulloh.service';
import { AbdullohController } from './abdulloh.controller';

@Module({
  controllers: [AbdullohController],
  providers: [AbdullohService],
})
export class AbdullohModule {}
