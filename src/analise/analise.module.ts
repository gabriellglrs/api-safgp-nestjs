import { Module } from '@nestjs/common';
import { AnaliseService } from './analise.service';
import { AnaliseController } from './analise.controller';

@Module({
  controllers: [AnaliseController],
  providers: [AnaliseService],
})
export class AnaliseModule {}
