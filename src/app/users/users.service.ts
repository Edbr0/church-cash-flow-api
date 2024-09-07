import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { Exception } from 'src/shared/app-response/app.exception';

@Injectable()
export class UsersService {
  constructor(readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const exists = await this.usersRepository.countByProp('user', createUserDto.user);

      if (exists > 0) throw Exception('Este nome de usuário já está em uso', HttpStatus.BAD_REQUEST);

      const user = { ...createUserDto, created_at: new Date(Date.now()), status: 'A' };

      return await this.usersRepository.createUser(user);
    } catch (error) {
      Exception(error);
    }
  }

  async findAll() {
    try {
      return await this.usersRepository.findAll();
    } catch (error) {
      Exception(error);
    }
  }

  async findOne(id: number) {
    return 'implementing..';
  }

  async findOneByUser(user: string) {
    try {
      return await this.usersRepository.findOneByUser(user);
    } catch (error) {}
  }

  async update(user_id: number, updateUserDto: UpdateUserDto) {
    try {
      const _user = await this.usersRepository.findByProp('user', updateUserDto.user);

      if ((_user[0]?.user_id ?? user_id) != user_id)
        throw Exception('Este nome de usuário já está em uso', HttpStatus.BAD_REQUEST);

      const user = { ...updateUserDto, updated_at: new Date(Date.now()) };

      await this.usersRepository.updateUser(user_id, user);
    } catch (error) {
      Exception(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
