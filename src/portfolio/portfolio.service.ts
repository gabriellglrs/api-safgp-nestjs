import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePortfolioDto } from './DTO/portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePortfolioDto) {
    return this.prisma.portfolio.create({ data });
  }

  async findAll() {
    return this.prisma.portfolio.findMany({
      include: {
        empresas: true, // Inclui as empresas associadas ao portfólio
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.portfolio.findUnique({
      where: { id },
      include: {
        empresas: true, // Inclui as empresas associadas ao portfólio
      },
    });
  }

  async update(id: number, data: CreatePortfolioDto) {
    return this.prisma.portfolio.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.portfolio.delete({
      where: { id },
    });
  }
}
