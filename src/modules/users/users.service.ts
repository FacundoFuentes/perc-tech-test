import { Injectable } from '@nestjs/common';
import { FindUsersDto } from './dto/find-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { apiUrl } from 'config.json';
import axios from 'axios';
import { IUsersService } from './interfaces/users-service.interface';
import { IUser, IUserDelete, IUserResponse } from './interfaces/user.interface';

@Injectable()
export class UsersService implements IUsersService {
  async findUsers(params: FindUsersDto): Promise<IUserResponse> {
    try {
      const { name, city, company, sort } = params;
      const users = (await axios.get(apiUrl)).data;

      let filteredUsers = users;

      if (name) {
        filteredUsers = filteredUsers.filter((user) =>
          user.name.toLowerCase().includes(name.toLowerCase()),
        );
      }

      if (city) {
        filteredUsers = filteredUsers.filter((user) =>
          user.address.city.toLowerCase().includes(city.toLowerCase()),
        );
      }

      if (company) {
        filteredUsers = filteredUsers.filter((user) =>
          user.company.name.toLowerCase().includes(company.toLowerCase()),
        );
      }

      if (sort) {
        filteredUsers.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
      }

      const response: IUserResponse = {
        totalUsers: filteredUsers.length,
        users: filteredUsers.map((user) => ({
          name: user.name,
          city: user.address.city,
          company: user.company.name,
        })),
      };

      return response;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  async createUser(userData: CreateUserDto): Promise<IUser> {
    try {
      const response = (await axios.post(apiUrl, userData)).data;
      return response;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async updateUser(id: string, userData: CreateUserDto): Promise<IUser> {
    try {
      const response = (await axios.put(`${apiUrl}/${id}`, userData)).data;
      return response;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  async deleteUser(id: string): Promise<IUserDelete> {
    try {
      const response = (await axios.delete(`${apiUrl}/${id}`)).data;
      return { response, message: 'User deleted successfully' };
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}
