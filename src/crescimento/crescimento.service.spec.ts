import { Test, TestingModule } from '@nestjs/testing';
import { CrescimentoService } from './crescimento.service';

describe('CrescimentoService', () => {
  let service: CrescimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrescimentoService],
    }).compile();

    service = module.get<CrescimentoService>(CrescimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
