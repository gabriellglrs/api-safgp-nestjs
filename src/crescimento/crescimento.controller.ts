import { Controller } from '@nestjs/common';
import { CrescimentoService } from './crescimento.service';

@Controller('crescimento')
export class CrescimentoController {
  constructor(private readonly crescimentoService: CrescimentoService) {}
}
