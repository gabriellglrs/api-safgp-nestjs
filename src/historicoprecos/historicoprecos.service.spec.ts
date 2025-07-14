import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoprecosService } from './historicoprecos.service';

describe('HistoricoprecosService', () => {
  let service: HistoricoprecosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricoprecosService],
    }).compile();

    service = module.get<HistoricoprecosService>(HistoricoprecosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
