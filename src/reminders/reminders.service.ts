import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reminder as ReminderEntity } from './reminder.entity';
import { Reminder } from './interfaces/reminder.interface';
import { CreateReminderDto } from './dto/create-reminder.dto';

@Injectable()
export class RemindersService {
  constructor(
    @InjectRepository(ReminderEntity)
    private remindersRepository: Repository<Reminder>,
  ) {}

  async create(payload: CreateReminderDto): Promise<Reminder> {
    return this.remindersRepository.create(payload);
  }

  findAll(): Promise<Reminder[]> {
    return this.remindersRepository.find();
  }

  findOne(id: string): Promise<Reminder> {
    return this.remindersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.remindersRepository.delete(id);
  }
}
