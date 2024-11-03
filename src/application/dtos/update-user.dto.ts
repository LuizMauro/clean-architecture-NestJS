import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Nome do usuário',
    example: 'John Doe',
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'Email do usuário',
    example: 'john@example.com',
  })
  email?: string;

  @ApiPropertyOptional({
    description: 'Senha do usuário',
    example: '123456',
    minLength: 6,
  })
  password?: string;
}
