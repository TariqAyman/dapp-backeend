// src/message/message.controller.ts
import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('message')
export class MessageController {
  constructor(private readonly web3Service: Web3Service) {}

  @UseGuards(JwtAuthGuard)
  @Post('store')
  async storeMessage(@Body('message') message: string, @Req() req: any) {
    // You might read the user's wallet address from the token payload:
    const walletAddress = req.user.walletAddress;
    // In a real scenario, you'd want the user to sign this transaction from the front end
    // For demonstration, we'll let the backend signer handle it
    const txReceipt = await this.web3Service.storeMessage(
      walletAddress,
      message,
    );
    return { txReceipt };
  }

  @UseGuards(JwtAuthGuard)
  @Get('retrieve')
  async retrieveMessage(@Req() req: any) {
    const walletAddress = req.user.walletAddress;
    const data = await this.web3Service.getMessage(walletAddress);
    return { data };
  }
}
