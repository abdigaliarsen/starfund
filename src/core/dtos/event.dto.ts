import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class EventDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsDate()
    dateAndTime: Date;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
    @IsOptional()
    fights: any[];

    @IsNotEmpty()
    @IsOptional()
    participatingFighters: any[];
}

export class CreateEventDto extends EventDto {}
export class UpdateEventDto extends PartialType(EventDto) {}