import { Injectable } from "@nestjs/common";
import { CreateFighterPersonalDataDto, FighterPersonalDataDto, UpdateFighterPersonalDataDto } from "src/core";

@Injectable()
export class FighterPersonalDataFactoryService {
    createNewFighterPersonalData(createEventDto: CreateFighterPersonalDataDto) {
        const fighterPersonalData = new FighterPersonalDataDto();
        
        fighterPersonalData.age = createEventDto.age;
        fighterPersonalData.height = createEventDto.height;
        fighterPersonalData.weight = createEventDto.weight;
        fighterPersonalData.reach = createEventDto.reach;
        fighterPersonalData.born = createEventDto.born;
        fighterPersonalData.dateOfBirth = createEventDto.dateOfBirth;
        fighterPersonalData.fighterId = createEventDto.fighterId;
        fighterPersonalData.fullname = createEventDto.fullname;
        fighterPersonalData.nickname = createEventDto.nickname;
        fighterPersonalData.weightClass = createEventDto.weightClass;

        return fighterPersonalData;
    }

    updateFighterPersonalData(updateFighterPersonalDataDto: UpdateFighterPersonalDataDto) {
        const fighterPersonalData = new FighterPersonalDataDto();
        
        fighterPersonalData.age = updateFighterPersonalDataDto.age;
        fighterPersonalData.height = updateFighterPersonalDataDto.height;
        fighterPersonalData.weight = updateFighterPersonalDataDto.weight;
        fighterPersonalData.reach = updateFighterPersonalDataDto.reach;
        fighterPersonalData.born = updateFighterPersonalDataDto.born;
        fighterPersonalData.dateOfBirth = updateFighterPersonalDataDto.dateOfBirth;
        fighterPersonalData.fighterId = updateFighterPersonalDataDto.fighterId;
        fighterPersonalData.fullname = updateFighterPersonalDataDto.fullname;
        fighterPersonalData.nickname = updateFighterPersonalDataDto.nickname;
        fighterPersonalData.weightClass = updateFighterPersonalDataDto.weightClass;

        return fighterPersonalData;
    }
}