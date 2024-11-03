import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UserTypeormEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
