/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { order, productonorders, Prisma } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<order[]> {
    return this.prismaService.order.findMany();
  }

  public getById(id: order['id']): Promise<order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }
}
