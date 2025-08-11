import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const portfolio = await this.prisma.portfolio.findUnique({
      where: { id },
      include: {
        empresas: true, // Inclui as empresas associadas ao portfólio
      },
    });

    if (!portfolio) {
      // 404 - Not Found
      throw new HttpException(`Portfólio com ID ${id} não encontrado`, HttpStatus.NOT_FOUND);
    }

    if (id <= 0) {
      // 400 - Bad Request
      throw new HttpException('O ID não pode ser negativo', HttpStatus.BAD_REQUEST);
    }

    return portfolio;
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
