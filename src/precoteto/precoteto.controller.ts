import { Controller } from '@nestjs/common';
import { PrecotetoService } from './precoteto.service';

@Controller('precoteto')
export class PrecotetoController {
  constructor(private readonly precotetoService: PrecotetoService) {}
}
