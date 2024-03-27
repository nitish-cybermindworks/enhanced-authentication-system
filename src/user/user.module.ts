import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { EntityRepository } from '@mikro-orm/postgresql';
@Module({
  controllers: [UserController],
  providers: [UserService, EntityRepository],
  imports: [
    MikroOrmModule.forFeature({
      entities: [User],
    }),
    AuthModule,
  ],
  exports: [UserService],
})
export class UserModule {}
