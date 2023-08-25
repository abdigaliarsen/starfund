import { Repository } from "typeorm";
import { IGenericRepository } from "src/core";
import { BaseEntity } from "./model/base.model";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class MySQLGenericRepository<T extends BaseEntity> implements IGenericRepository<T> {
    protected readonly _repository: Repository<T>;
    protected readonly _populateOnFind: string[];

    constructor(repository: Repository<T>, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    getAll(): Promise<T[]> {
        return this._repository.find({ relations: this._populateOnFind });
    }

    async get(entityId: number): Promise<T | null> {
        const entity = await this._repository
            .createQueryBuilder()
            .where("id = :id", { id: entityId })
            .getOne();
        
        if (!entity) throw new Error(`entity with id ${entityId} not found`);

        return entity;
    }

    create(entity: T): Promise<T> {
        return this._repository.save(entity);
    }

    async update(entityId: number, entity: T): Promise<T> {
        await this._repository
            .createQueryBuilder()
            .update()
            .set({ ...entity as QueryDeepPartialEntity<T> })
            .where("id = :id", { id: entityId })
            .execute();
        
        return { ...entity, id: entityId };
    }

    async delete(entityId: number): Promise<void> {
        this._repository.delete(entityId);
    }
}