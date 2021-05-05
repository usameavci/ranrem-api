import { IsInt, IsString, IsDateString, IsOptional } from 'class-validator';

export class UpdateReminderDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsDateString()
  @IsOptional()
  alarm_date: Date;

  @IsInt()
  @IsOptional()
  alarm_frequency: number;
}
