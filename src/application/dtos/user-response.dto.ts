import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/core/entities/user.entity';

export class UserResponseDto {
  @ApiProperty({
    description: 'ID do usuário',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'john@example.com',
  })
  email: string;

  static fromDomain(user: User): UserResponseDto {
    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
    };
  }
}
