import { Module } from '@nestjs/common';
import { PortfolioempresaService } from './portfolioempresa.service';
import { PortfolioempresaController } from './portfolioempresa.controller';

@Module({
  controllers: [PortfolioempresaController],
  providers: [PortfolioempresaService],
})
export class PortfolioempresaModule {}
