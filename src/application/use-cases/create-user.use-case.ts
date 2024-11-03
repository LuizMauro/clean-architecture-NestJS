import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/interfaces/repositories/user-repository.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import {
  EmailAlreadyExistsError,
  InvalidPasswordError,
} from '../../core/errors/user.errors';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new EmailAlreadyExistsError(createUserDto.email);
    }

    const user = new User(
      uuidv4(),
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );

    if (!user.isValidPassword(createUserDto.password)) {
      throw new InvalidPasswordError();
    }

    return this.userRepository.create(user);
  }
}
