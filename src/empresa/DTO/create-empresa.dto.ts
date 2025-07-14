import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  ticker: string;

  @IsString()
  setor: string;

  @IsNumber()
  cotacaoAtual: number;
}
