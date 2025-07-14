import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ValuationModule } from './valuation/valuation.module';
import { RentabilidadeModule } from './rentabilidade/rentabilidade.module';
import { CrescimentoModule } from './crescimento/crescimento.module';
import { PrecotetoModule } from './precoteto/precoteto.module';
import { AnaliseModule } from './analise/analise.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioempresaModule } from './portfolioempresa/portfolioempresa.module';
import { HistoricoprecosModule } from './historicoprecos/historicoprecos.module';

@Module({
  imports: [PrismaModule, EmpresaModule, ValuationModule, RentabilidadeModule, CrescimentoModule, PrecotetoModule, AnaliseModule, PortfolioModule, PortfolioempresaModule, HistoricoprecosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
