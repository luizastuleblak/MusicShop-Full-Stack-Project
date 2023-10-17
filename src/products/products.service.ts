import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<product[]> {
    return this.prismaService.product.findMany();
  }

  public getById(id: product['id']): Promise<product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }
}
