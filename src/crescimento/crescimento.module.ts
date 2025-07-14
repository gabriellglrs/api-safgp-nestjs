import { Module } from '@nestjs/common';
import { CrescimentoService } from './crescimento.service';
import { CrescimentoController } from './crescimento.controller';

@Module({
  controllers: [CrescimentoController],
  providers: [CrescimentoService],
})
export class CrescimentoModule {}
