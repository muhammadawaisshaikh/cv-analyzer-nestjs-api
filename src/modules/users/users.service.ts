import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'awaisshaikh94@gmail.com',
      password: '12345678',
    },
    {
      userId: 2,
      username: 'ilyasahmed081@gmail.com',
      password: '12345678',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
