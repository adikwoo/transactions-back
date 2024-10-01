import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  dateTime: string;

  @Column()
  author: string;

  @Column('decimal')
  sum: number;

  @Column()
  category: string;

  @Column({ nullable: true })
  comment: string;
}

