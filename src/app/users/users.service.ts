import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { InternalServerError } from 'src/shared/app-response/app.internal.sever.error';

@Injectable()
export class UsersService {
  constructor(readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = { ...createUserDto, created_at: new Date(Date.now()), status: 'A' };

      return await this.usersRepository.createUser(user);
    } catch (error) {
      InternalServerError(error);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
