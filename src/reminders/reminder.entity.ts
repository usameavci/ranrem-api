import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  alarm_date: Date;

  @Column({ default: 2 })
  alarm_frequency: number;
}
