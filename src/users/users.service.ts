import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Find a user by wallet address
  async findByWallet(walletAddress: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ walletAddress }).exec();
  }

  // Create a new user
  async create(userData: Partial<User>): Promise<UserDocument> {
    const newUser = new this.userModel(userData);
    return newUser.save();
  }

  // Additional user-related methods if needed
  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async update(
    walletAddress: string,
    updateData: Partial<User>,
  ): Promise<UserDocument | null> {
    return this.userModel
      .findOneAndUpdate({ walletAddress }, updateData, { new: true })
      .exec();
  }

  async remove(walletAddress: string): Promise<any> {
    return this.userModel.deleteOne({ walletAddress }).exec();
  }

  async createOrUpdateUser(walletAddress: string, data: string): Promise<User> {
    return this.userModel.findOneAndUpdate(
      { walletAddress },
      { walletAddress, data },
      { upsert: true, new: true },
    );
  }

  async getUser(walletAddress: string): Promise<User | null> {
    return this.userModel.findOne({ walletAddress }).exec();
  }
}
