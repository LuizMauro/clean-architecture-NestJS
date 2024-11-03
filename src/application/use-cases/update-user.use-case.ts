import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/interfaces/repositories/user-repository.interface';
import { UpdateUserDto } from '../dtos/update-user.dto';
import {
  UserNotFoundError,
  EmailAlreadyExistsError,
} from '../../core/errors/user.errors';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw new UserNotFoundError(id);
    }

    if (updateUserDto.email) {
      const userWithEmail = await this.userRepository.findByEmail(
        updateUserDto.email,
      );
      if (userWithEmail && userWithEmail.getId() !== id) {
        throw new EmailAlreadyExistsError(updateUserDto.email);
      }
    }

    const updatedUser = new User(
      id,
      updateUserDto.name || existingUser.getName(),
      updateUserDto.email || existingUser.getEmail(),
      updateUserDto.password || existingUser.getPassword(),
    );

    return this.userRepository.update(id, updatedUser);
  }
}
