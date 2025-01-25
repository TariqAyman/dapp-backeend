import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

// Strategy configuration
const strategyConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtConstants.secret,
  signOptions: { expiresIn: jwtConstants.expiresIn },
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super(strategyConfig);
  }

  validate(payload: { sub: string; walletAddress: string }) {
    return {
      email: payload.sub,
      walletAddress: payload.walletAddress,
    };
  }
}
