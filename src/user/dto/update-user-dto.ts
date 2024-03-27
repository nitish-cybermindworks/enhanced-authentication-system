import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { profileVisibilityEnum } from '../entities/user.entity';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  bio!: string | null;

  @IsOptional()
  @IsDateString()
  dob!: Date | null;

  @IsOptional()
  @IsString()
  profileImage!: string | null;

  @IsOptional()
  @IsString()
  coverPicture!: string | null;

  @IsEnum(profileVisibilityEnum)
  profileVisibility!: profileVisibilityEnum;
}
