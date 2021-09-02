import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { LoginRequestDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginUserDto: LoginRequestDto): Promise<any> {
    const user = await this.userRepository.findOne({
      username: loginUserDto.username,
    });

    if (!user) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: `등록되지 않은 사용자입니다.`,
        error: 'Forbidden',
      });
    }

    const isMatch = loginUserDto.password === user.password;

    if (isMatch) {
      const { password, ...result } = user;
      return result;
    } else {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: `사용자 정보가 일치하지 않습니다.`,
        error: 'Forbidden',
      });
    }
  }

  async login(body: LoginRequestDto) {
    return {
      accessToken: this.jwtService.sign({
        username: body.username,
      }),
    };
  }
}
