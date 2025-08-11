import { Exclude, Expose } from 'class-transformer';

@Exclude() // Exclui todos os campos por padrão
export class ResponseEmpresaDto {
  
  @Expose() // Exclui o campo 'id' por padrão, mas o expõe explicitamente
  id: number;
  @Expose() // Exclui o campo 'nome' por padrão, mas o expõe explicitamente
  nome: string;
  @Expose() // Exclui o campo 'ticker' por padrão, mas o expõe explicitamente
  ticker: string;
  @Expose() // Exclui o campo 'setor' por padrão, mas o expõe explicitamente
  setor: string;
  @Expose() // Exclui o campo 'cotacaoAtual' por padrão, mas o expõe explicitamente
  cotacaoAtual: number;
}
