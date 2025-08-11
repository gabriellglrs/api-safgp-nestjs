import { Injectable } from '@nestjs/common';
import { UpdateEmpresaDto } from './DTO/update-empresa.dto';
import { CreateEmpresaDto } from './DTO/create-empresa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpresaService {
     constructor(private prisma: PrismaService) {}

  create(data: CreateEmpresaDto) {
    return this.prisma.empresa.create({ data });
  }

  findAll() {
    return this.prisma.empresa.findMany({
    });
  }

  findOne(id: number) {
    return this.prisma.empresa.findUnique({
      where: { id },
      include: {
        // valuation: true,
        // rentabilidade: false,
        // crescimento: true,
        // precoTeto: true,
        // analises: true,
        // historicoPrecos: true,
        // portfolios: true,
      },
    });
  }

  update(id: number, data: UpdateEmpresaDto) {
    return this.prisma.empresa.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.empresa.delete({
      where: { id },
    });
  }
}
