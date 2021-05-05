import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Reminder } from './reminders/reminder.entity';
import { ReminderModule } from './reminders/reminders.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'homestead',
      password: 'secret',
      database: 'ranrem_api',
      entities: [Reminder],
      synchronize: true,
    }),
    ReminderModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
