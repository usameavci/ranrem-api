import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RemindersService } from './reminders.service';
import { RemindersController } from './reminders.controller';
import { Reminder } from './reminder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reminder])],
  providers: [RemindersService],
  controllers: [RemindersController],
})
export class UsersModule {}
