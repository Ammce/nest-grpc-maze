import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login() {
    return { loggedIn: true, name: 'Amel' };
  }

  async register() {
    return { surname: 'Muminovic', name: 'Amel' };
  }
}
