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
}
