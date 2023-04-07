import { BaseEntity, Column } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quiz2')
export class QuizDB2 extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: "The id should be uniqe",
    })
    id: number;

    @Column({
        type: "varchar",
    })
    title: string;

    @Column({
        type: "varchar",
    })
    description: string;

}