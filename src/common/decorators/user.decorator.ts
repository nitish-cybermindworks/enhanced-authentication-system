import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { RolesGuard } from 'src/user/entities/role.guard';
import { User } from 'src/user/entities/user.entity';
import { UserRole } from 'src/user/entities/user.entity';

export const user = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    const u: User = request.user;
    return u;
  },
);

export function Auth(roles:UserRole[]) {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    ApiBearerAuth('JWT'),
    SetMetadata(ROLES_KEY, roles),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}

export const getUserFromToken = user;
export const ROLES_KEY = 'roles';

