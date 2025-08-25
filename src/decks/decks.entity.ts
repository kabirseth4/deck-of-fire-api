import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
