import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioempresaService } from './portfolioempresa.service';

describe('PortfolioempresaService', () => {
  let service: PortfolioempresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioempresaService],
    }).compile();

    service = module.get<PortfolioempresaService>(PortfolioempresaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
