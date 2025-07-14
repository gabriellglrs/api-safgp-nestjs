import { Test, TestingModule } from '@nestjs/testing';
import { RentabilidadeController } from './rentabilidade.controller';
import { RentabilidadeService } from './rentabilidade.service';

describe('RentabilidadeController', () => {
  let controller: RentabilidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentabilidadeController],
      providers: [RentabilidadeService],
    }).compile();

    controller = module.get<RentabilidadeController>(RentabilidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
