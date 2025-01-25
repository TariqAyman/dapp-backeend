import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class Web3Service {
  private provider: ethers.JsonRpcProvider;
  private contract: ethers.Contract;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    this.contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS as string,
      [
        'function storeMessage(string)',
        'function getMessage() view returns (string)',
      ],
      this.provider,
    );
  }

  async storeMessage(walletAddress: string, message: string) {
    const signer = await this.provider.getSigner(walletAddress);
    const contractWithSigner = this.contract.connect(signer);
    const tx = await contractWithSigner.storeMessage(message);
    await tx.wait();
  }

  async getMessage(walletAddress: string): Promise<string> {
    const signer = await this.provider.getSigner(walletAddress);
    const contractWithSigner = this.contract.connect(signer);
    return contractWithSigner.getMessage();
  }
}
