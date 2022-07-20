import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPassowrdValid = await bcrypt.compare(password, user.password);

      if (isPassowrdValid) {
        return {
          ...user,
          password: undefined,
        };
      }
      throw new Error('Email adress or password is incorrect');
    }
  }
}
