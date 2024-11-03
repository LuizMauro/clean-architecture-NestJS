import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/interfaces/repositories/user-repository.interface';

@Injectable()
export class FindUserByIdUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
