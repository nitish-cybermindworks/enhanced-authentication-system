import { Property, Entity, Unique, Enum } from '@mikro-orm/core';
import { BaseEntity } from '../../base.entity';

export enum UserRole {
  normalUser = 'normalUser',
  admin = 'admin',
}

export enum ProfileVisibilityEnum {
  public = 'public',
  private = 'private',
}

@Entity()
export class User extends BaseEntity {
  @Property({ type: 'text' })
  name: string;

  @Property()
  @Unique()
  username: string;

  @Property({ nullable: true })
  email: string | null;

  @Property({ nullable: true })
  phone: string | null;

  @Property({ nullable: true })
  bio: string | null;

  @Property({ nullable: true })
  dob: Date | null;

  @Property({ nullable: true })
  coverPicture: string | null;

  @Property({ nullable: true, default: null })
  profileImage: string | null;

  @Enum({ type: () => ProfileVisibilityEnum })
  profileVisibility: ProfileVisibilityEnum;

  @Enum(() => UserRole)
  role: UserRole;

  constructor({
    name,
    email,
    username,
    phone,
    bio,
    dob,
    coverPicture,
    profileImage,
    profileVisibility,
    role,
  }: {
    name: string;
    email: string | null;
    username: string;
    phone: string | null;
    bio: string | null;
    dob: Date | null;
    coverPicture: string | null;
    profileVisibility: ProfileVisibilityEnum;
    profileImage: string | null;
    role: UserRole;
  }) {
    super();
    this.name = name;
    this.email = email;
    this.username = username;
    this.phone = phone;
    this.bio = bio;
    this.dob = dob;
    this.coverPicture = coverPicture;
    this.profileVisibility = profileVisibility;
    this.profileImage = profileImage;
    this.role = role;
  }
}
