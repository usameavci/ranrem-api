import { IsInt, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateReminderDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsDateString()
  alarm_date: Date;

  @IsInt()
  @IsOptional()
  alarm_frequency: number;
}
