import { FindUsersDto } from '../dto/find-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUser, IUserDelete, IUserResponse } from './user.interface';

export interface IUsersService {
  findUsers(params: FindUsersDto): Promise<IUserResponse>;
  createUser(userData: CreateUserDto): Promise<IUser>;
  updateUser(id: string, userData: CreateUserDto): Promise<IUser>;
  deleteUser(id: string): Promise<IUserDelete>;
}
