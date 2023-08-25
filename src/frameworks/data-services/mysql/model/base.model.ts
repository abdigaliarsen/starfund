import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'date' })
    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ type: 'date', nullable: true })
    @DeleteDateColumn()
    deletedAt: Date;
}