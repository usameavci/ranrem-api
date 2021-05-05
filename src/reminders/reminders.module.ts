import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Reminder } from './reminder.entity';
import { RemindersService } from './reminders.service';
import { RemindersController } from './reminders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reminder])],
  providers: [RemindersService],
  controllers: [RemindersController],
})
export class ReminderModule {}
