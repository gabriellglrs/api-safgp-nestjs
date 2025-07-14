import { Module } from '@nestjs/common';
import { HistoricoprecosService } from './historicoprecos.service';
import { HistoricoprecosController } from './historicoprecos.controller';

@Module({
  controllers: [HistoricoprecosController],
  providers: [HistoricoprecosService],
})
export class HistoricoprecosModule {}
