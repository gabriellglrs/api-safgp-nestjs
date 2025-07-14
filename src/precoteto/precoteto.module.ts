import { Module } from '@nestjs/common';
import { PrecotetoService } from './precoteto.service';
import { PrecotetoController } from './precoteto.controller';

@Module({
  controllers: [PrecotetoController],
  providers: [PrecotetoService],
})
export class PrecotetoModule {}
