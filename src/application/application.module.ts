import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindUserByIdUseCase } from './use-cases/find-user-by-id.use-case';
import { UpdateUserUseCase } from './use-cases/update-user.use-case';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { FindAllUsersUseCase } from './use-cases/find-all-users.use-case';

@Module({
  imports: [InfrastructureModule],
  providers: [
    CreateUserUseCase,
    FindUserByIdUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    FindAllUsersUseCase,
  ],
  exports: [
    CreateUserUseCase,
    FindUserByIdUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    FindAllUsersUseCase,
  ],
})
export class ApplicationModule {}
