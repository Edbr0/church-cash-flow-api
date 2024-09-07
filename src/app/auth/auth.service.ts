import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Seu serviço de usuários
import { LoginDto } from './dto/login.dto';
import { Exception } from 'src/shared/app-response/app.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUser(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDto) {
    try {
      const _user = await this.validateUser(user.username, user.password);

      if (!_user) throw Exception('Credenciais inválidas', HttpStatus.UNAUTHORIZED);

      return {
        access_token: this.jwtService.sign(user),
      };
    } catch (error) {
      Exception(error);
    }
  }
}
