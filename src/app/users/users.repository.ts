import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return await this.prisma.users.findMany();
  }

  async findById(user_id: number): Promise<User | null> {
    return await this.prisma.users.findUnique({
      where: { user_id },
    });
  }

  async findByName(name: string): Promise<User[]> {
    return await this.prisma.users.findMany({
      where: { name },
    });
  }

  async createUser(data: Omit<User, 'user_id'>): Promise<void> {
    await this.prisma.users.create({
      data,
    });
  }

  async deleteUser(user_id: number): Promise<User> {
    return await this.prisma.users.delete({
      where: { user_id },
    });
  }

  async findByProp(prop: string, value: any): Promise<User[]> {
    return await this.prisma.users.findMany({
      where: { [prop]: value },
    });
  }

  async countByProp(prop: string, value: any): Promise<number> {
    return await this.prisma.users.count({
      where: { [prop]: value },
    });
  }

  async updateUser(
    user_id: number,
    data: Omit<User, 'user_id' | 'created_at' | 'created_user' | 'password'>,
  ): Promise<void> {
    await this.prisma.users.update({
      data: data,
      where: {
        user_id: user_id,
      },
    });
  }

  async findOneByUser(user: string): Promise<User> {
    return await this.prisma.users.findFirst({
      where: {
        user: user,
      },
    });
  }
}
