import { Exclude } from "class-transformer";

export class PortfolioResponseDto {
    id: number;
    nome: string;
    dataCriacao: Date;
    valorTotal: number;
    @Exclude() // Esse campo não será enviado no JSON
    createdAt: Date;
}