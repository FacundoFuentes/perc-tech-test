import { IsString, IsEmail, ValidateNested } from '@nestjs/class-validator';
import { Type } from '@nestjs/class-transformer';

class GeoDto {
  @IsString()
  lat: string;

  @IsString()
  lng: string;
}

class AddressDto {
  @IsString()
  street: string;

  @IsString()
  suite: string;

  @IsString()
  city: string;

  @IsString()
  zipcode: string;

  @ValidateNested()
  @Type(() => GeoDto)
  geo: GeoDto;
}

class CompanyDto {
  @IsString()
  name: string;

  @IsString()
  catchPhrase: string;

  @IsString()
  bs: string;
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsString()
  phone: string;

  @IsString()
  website: string;

  @ValidateNested()
  @Type(() => CompanyDto)
  company: CompanyDto;
}
