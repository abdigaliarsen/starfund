import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from "@nestjs/swagger";

export class EventDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'The title of the event' })
    title: string;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ description: 'The date and time of the event' })
    dateAndTime: Date;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'The location of the event' })
    location: string;

    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ description: 'The fights of the event' })
    fights: any[];

    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ description: 'The participating fighters of the event' })
    participatingFighters: any[];
}

export class CreateEventDto extends EventDto {}
export class UpdateEventDto extends PartialType(EventDto) {}