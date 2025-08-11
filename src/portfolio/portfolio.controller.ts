import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioResponseDto } from './DTO/PortfolioResponseDto';
import { plainToInstance } from 'class-transformer';
import { CreatePortfolioDto } from './DTO/portfolio.dto';
@UseInterceptors(ClassSerializerInterceptor)
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  create(@Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfolioService.create(createPortfolioDto);
  }

  @Get()
  async findAll() {
    const portfolios = await this.portfolioService.findAll();
    return plainToInstance(PortfolioResponseDto, portfolios);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const portfolio = await this.portfolioService.findOne(id);
    return plainToInstance(PortfolioResponseDto, portfolio);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPortfolioDto: CreatePortfolioDto,
  ) {
    return this.portfolioService.update(id, createPortfolioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.portfolioService.remove(id);
  }
}
