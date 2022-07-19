import { Cars } from '@prisma/client';

export class CarEntity implements Cars {
  id: number;
  onSale: boolean;
  name: string;
  marca: string;
  modelo: string;
  ano: string;
  createdAt: Date;
  updatedAt: Date;
}
