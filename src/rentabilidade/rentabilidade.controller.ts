import { Controller } from '@nestjs/common';
import { RentabilidadeService } from './rentabilidade.service';

@Controller('rentabilidade')
export class RentabilidadeController {
  constructor(private readonly rentabilidadeService: RentabilidadeService) {}
}
