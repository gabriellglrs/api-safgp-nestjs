import { Controller } from '@nestjs/common';
import { PortfolioempresaService } from './portfolioempresa.service';

@Controller('portfolioempresa')
export class PortfolioempresaController {
  constructor(private readonly portfolioempresaService: PortfolioempresaService) {}
}
