import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  cpf: string;
  telephone: string;
  address: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
