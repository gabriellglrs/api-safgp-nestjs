import { Test, TestingModule } from '@nestjs/testing';
import { PrecotetoController } from './precoteto.controller';
import { PrecotetoService } from './precoteto.service';

describe('PrecotetoController', () => {
  let controller: PrecotetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrecotetoController],
      providers: [PrecotetoService],
    }).compile();

    controller = module.get<PrecotetoController>(PrecotetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
