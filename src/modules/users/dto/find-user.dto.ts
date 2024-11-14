import { IsOptional, IsString } from '@nestjs/class-validator';

export class FindUsersDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  sort?: string;
}
