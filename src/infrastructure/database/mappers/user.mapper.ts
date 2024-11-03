import { User } from '../../../core/entities/user.entity';
import { UserTypeormEntity } from '../entities/user.entity';

export class UserMapper {
  static toDomain(userEntity: UserTypeormEntity): User {
    return new User(
      userEntity.id,
      userEntity.name,
      userEntity.email,
      userEntity.password,
    );
  }

  static toPersistence(user: User): UserTypeormEntity {
    const userEntity = new UserTypeormEntity();
    userEntity.id = user.getId();
    userEntity.name = user.getName();
    userEntity.email = user.getEmail();
    userEntity.password = user.getPassword();
    return userEntity;
  }
}
