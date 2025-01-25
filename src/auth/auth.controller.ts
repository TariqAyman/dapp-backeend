import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(walletAddress: string) {
    // Simple check for existing user or create new
    let user = await this.usersService.findByWallet(walletAddress);
    if (!user) {
      // If not found, create new user
      user = await this.usersService.create({ walletAddress });
    }
    // Return user
    return user;
  }

  async login(walletAddress: string) {
    const user = await this.validateUser(walletAddress);
    const payload = { sub: user.email, walletAddress: user.walletAddress };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
