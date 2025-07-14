import { Module } from '@nestjs/common';
import { RentabilidadeService } from './rentabilidade.service';
import { RentabilidadeController } from './rentabilidade.controller';

@Module({
  controllers: [RentabilidadeController],
  providers: [RentabilidadeService],
})
export class RentabilidadeModule {}
