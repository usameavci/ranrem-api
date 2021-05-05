import { Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Reminder } from './reminder.entity';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';

@Injectable()
export class RemindersService {
  constructor(
    @InjectRepository(Reminder)
    private remindersRepository: Repository<Reminder>,
  ) {}

  findAll(): Promise<Reminder[]> {
    return this.remindersRepository.find();
  }

  findOne(id: string): Promise<Reminder> {
    return this.remindersRepository.findOne(id);
  }

  async create(createReminderDto: CreateReminderDto): Promise<void> {
    const reminder = new Reminder();

    const toCreate = Object.assign(reminder, createReminderDto);

    await this.remindersRepository.save(toCreate);
  }

  async update(
    id: string,
    updateReminderDto: UpdateReminderDto,
  ): Promise<Reminder> {
    const reminder = await this.findOne(id);

    const toUpdate = Object.assign(reminder, updateReminderDto);

    try {
      await this.remindersRepository.update(id, toUpdate);

      return toUpdate;
    } catch (err) {
      throw err;
    }
  }

  async delete(id: string): Promise<void> {
    await this.remindersRepository.delete(id);
  }
}
