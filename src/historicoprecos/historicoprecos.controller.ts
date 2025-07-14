import { Controller } from '@nestjs/common';
import { HistoricoprecosService } from './historicoprecos.service';

@Controller('historicoprecos')
export class HistoricoprecosController {
  constructor(private readonly historicoprecosService: HistoricoprecosService) {}
}
