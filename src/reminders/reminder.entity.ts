import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  alarm_date: Date;

  @Column()
  alarm_frequency: Date;
}
