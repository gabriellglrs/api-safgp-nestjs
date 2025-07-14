import { Test, TestingModule } from '@nestjs/testing';
import { PrecotetoService } from './precoteto.service';

describe('PrecotetoService', () => {
  let service: PrecotetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrecotetoService],
    }).compile();

    service = module.get<PrecotetoService>(PrecotetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
