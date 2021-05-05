import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { Reminder } from './reminder.entity';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';

@Controller('reminders')
export class RemindersController {
  constructor(private remindersService: RemindersService) {}

  @Get('/')
  async index(): Promise<Reminder[]> {
    return this.remindersService.findAll();
  }

  @Post()
  async store(@Body() createReminderDto: CreateReminderDto) {
    await this.remindersService.create(createReminderDto);
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Reminder> {
    return await this.remindersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReminderDto: UpdateReminderDto,
  ): Promise<Reminder> {
    return await this.remindersService.update(id, updateReminderDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.remindersService.delete(id);
  }
}
