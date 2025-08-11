import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy
{
  // Método chamado quando o módulo é iniciado
  async onModuleInit() {
    await this.$connect(); // Conecta ao banco
  }

  // Método chamado quando o módulo é destruído
  async onModuleDestroy() {
    await this.$disconnect(); // Desconecta do banco
  }
}
