import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioempresaController } from './portfolioempresa.controller';
import { PortfolioempresaService } from './portfolioempresa.service';

describe('PortfolioempresaController', () => {
  let controller: PortfolioempresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortfolioempresaController],
      providers: [PortfolioempresaService],
    }).compile();

    controller = module.get<PortfolioempresaController>(PortfolioempresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
