import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUsersDto } from './dto/find-user.dto';
import { IUserResponse } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(@Query() findUsersDto: FindUsersDto): Promise<IUserResponse> {
    try {
      return await this.usersService.findUsers(findUsersDto);
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.createUser(createUserDto);
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ) {
    try {
      return await this.usersService.updateUser(id, updateUserDto);
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      return await this.usersService.deleteUser(id);
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}
