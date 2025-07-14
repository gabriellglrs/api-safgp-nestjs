import { Test, TestingModule } from '@nestjs/testing';
import { RentabilidadeService } from './rentabilidade.service';

describe('RentabilidadeService', () => {
  let service: RentabilidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentabilidadeService],
    }).compile();

    service = module.get<RentabilidadeService>(RentabilidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
