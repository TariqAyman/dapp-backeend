import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createOrUpdateUser(
    @Body('walletAddress') walletAddress: string,
    @Body('data') data: string,
  ) {
    return this.usersService.createOrUpdateUser(walletAddress, data);
  }

  @Get(':walletAddress')
  async getUser(@Param('walletAddress') walletAddress: string) {
    return this.usersService.getUser(walletAddress);
  }
}
