import { Repository } from "typeorm";
import { IGenericRepository } from "src/core";
import { BaseEntity } from "./model/base.model";

export class MySQLGenericRepository<T extends BaseEntity> implements IGenericRepository<T> {
    private _repository: Repository<T>;
    private _populateOnFind: string[];

    constructor(repository: Repository<T>, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    getAll(): Promise<T[]> {
        return this._repository.find({ relations: this._populateOnFind });
    }

    // TODO: replace find with findOneBy
    get(entityId: number): Promise<T | null> {
        return this._repository
            .createQueryBuilder()
            .where("id = :id", { id: entityId })
            .getOne();
    }

    create(entity: T): Promise<T> {
        return this._repository.save(entity);
    }

    update(entityId: number, entity: T): Promise<T> {
        entity.id = entityId;
        return this._repository.save({
            ...entity
        });
    }
}