import { Repository } from "typeorm";
import { IGenericRepository } from "src/core";

export class PostgresGenericRepository<T> implements IGenericRepository<T> {
    private _repository: Repository<T>;
    private _populateOnFind: string[];

    constructor(repository: Repository<T>, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    getAll(): Promise<T[]> {
        return this._repository.find({ relations: this._populateOnFind });
    }

    // TODO: replace query builder with findOneBy
    get(id: number): Promise<T> {
        return this._repository
            .createQueryBuilder()
            .select()
            .where("id = :id", { id: id })
            .getOne();
    }

    create(entity: T): Promise<T> {
        return this._repository.save(entity);
    }

    update(id: number, entity: T): Promise<T> {
        return this._repository.save({
            id: id,
            ...entity
        });
    }
}