import { QuizDB2 } from './../Entities/quiz.entity';
import {EntityRepository, Repository } from "typeorm";

@EntityRepository(QuizDB2)
export class Quiz2REpository extends Repository<QuizDB2>{}
