import { Injectable } from "@nestjs/common";
import { CreateFighterPersonalDataDto, FighterPersonalDataDto, UpdateFighterPersonalDataDto } from "src/core";

@Injectable()
export class FighterPersonalDataFactoryService {
    createNewFighterPersonalData(createEventDto: CreateFighterPersonalDataDto) {
        const fighterPersonalData: FighterPersonalDataDto = {
            age: createEventDto.age,
            height: createEventDto.height,
            weight: createEventDto.weight,
            reach: createEventDto.reach,
            born: createEventDto.born,
            dateOfBirth: createEventDto.dateOfBirth,
            fighterId: createEventDto.fighterId,
            fullname: createEventDto.fullname,
            nickname: createEventDto.nickname,
            weightClass: createEventDto.weightClass,
        };

        return fighterPersonalData;
    }

    updateFighterPersonalData(updateFighterPersonalDataDto: UpdateFighterPersonalDataDto) {
        return { ...new FighterPersonalDataDto(), ...updateFighterPersonalDataDto };
    }
}