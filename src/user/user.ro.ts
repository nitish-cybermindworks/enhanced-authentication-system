import { profileVisibilityEnum, User } from './entities/user.entity';

export class UserRO {
  id: number;
  name: string;
  email: string | null;
  username: string;
  phone: string | null;
  bio: string | null;
  dob: Date | null;
  coverPicture: string | null;
  profileImage: string | null;
  profileVisibility:profileVisibilityEnum;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.phone = user.phone;
    this.bio = user.bio;
    this.dob = user.dob;
    this.coverPicture = user.coverPicture;
    this.profileVisibility = user.profileVisibility;
    this.profileImage = user.profileImage;
  }
}
