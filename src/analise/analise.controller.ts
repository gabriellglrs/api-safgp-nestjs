import { Controller } from '@nestjs/common';
import { AnaliseService } from './analise.service';

@Controller('analise')
export class AnaliseController {
  constructor(private readonly analiseService: AnaliseService) {}
}
