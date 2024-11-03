import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/interfaces/repositories/user-repository.interface';
import { UserTypeormEntity } from '../database/entities/user.entity';
import { UserMapper } from '../database/mappers/user.mapper';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserTypeormEntity)
    private readonly userRepository: Repository<UserTypeormEntity>,
  ) {}

  async create(user: User): Promise<User> {
    const persistenceUser = UserMapper.toPersistence(user);
    const savedUser = await this.userRepository.save(persistenceUser);
    return UserMapper.toDomain(savedUser);
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    return UserMapper.toDomain(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) return null;
    return UserMapper.toDomain(user);
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users.map((user) => UserMapper.toDomain(user));
  }

  async update(id: string, user: User): Promise<User> {
    const persistenceUser = UserMapper.toPersistence(user);
    await this.userRepository.update(id, persistenceUser);
    const updatedUser = await this.userRepository.findOne({ where: { id } });
    return UserMapper.toDomain(updatedUser);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
