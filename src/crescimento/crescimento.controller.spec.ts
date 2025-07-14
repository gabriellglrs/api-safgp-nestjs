import { Test, TestingModule } from '@nestjs/testing';
import { CrescimentoController } from './crescimento.controller';
import { CrescimentoService } from './crescimento.service';

describe('CrescimentoController', () => {
  let controller: CrescimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrescimentoController],
      providers: [CrescimentoService],
    }).compile();

    controller = module.get<CrescimentoController>(CrescimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
