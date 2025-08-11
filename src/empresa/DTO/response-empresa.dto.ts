import { Exclude, Expose } from 'class-transformer';
import { Portfolio } from '../../../generated/prisma/index';

@Exclude() // Exclui todos os campos por padrão
export class ResponseEmpresaDto {
  @Expose()
  id: number;
  @Expose()
  nome: string;
  @Expose()
  ticker: string;
  @Expose()
  setor: string;
  @Expose()
  cotacaoAtual: number;
}
