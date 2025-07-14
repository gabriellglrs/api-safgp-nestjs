import { Exclude, Expose } from 'class-transformer';

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
