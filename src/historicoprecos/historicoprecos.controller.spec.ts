import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoprecosController } from './historicoprecos.controller';
import { HistoricoprecosService } from './historicoprecos.service';

describe('HistoricoprecosController', () => {
  let controller: HistoricoprecosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricoprecosController],
      providers: [HistoricoprecosService],
    }).compile();

    controller = module.get<HistoricoprecosController>(HistoricoprecosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
