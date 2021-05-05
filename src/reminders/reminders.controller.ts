import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { RemindersService } from './reminders.service';
import { Reminder } from './interfaces/reminder.interface';

@Controller('reminders')
export class RemindersController {
  constructor(private remindersService: RemindersService) {}

  @Post()
  async create(@Body() createReminderDto: CreateReminderDto) {
    await this.remindersService.create(createReminderDto);
  }

  @Get('/')
  async findAll(): Promise<Reminder[]> {
    return this.remindersService.findAll();
  }
}
