import { Type } from "class-transformer";
import { IsArray, IsDate, IsNumber, IsString, ValidateNested } from "class-validator";
import { PortfolioEmpresa } from "generated/prisma";
import { PortfolioEmpresaDto } from "./PortfolioEmpresaDto";

export class CreatePortfolioDto {
    @IsNumber()
    id: number;
    @IsString()
    nome: string;
    @IsDate()
    dataCriacao: Date;
    @IsNumber()
    valorTotal: number;
}