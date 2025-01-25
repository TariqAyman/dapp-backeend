import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username?: string;

  @Prop()
  email?: string;

  @Prop({ unique: true, required: true })
  walletAddress: string;

  @Prop()
  data?: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop()
  password?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
