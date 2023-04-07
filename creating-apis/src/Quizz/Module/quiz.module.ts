import { Quiz2Service } from './../Service/quiz.service';
import { Quiz2Controller } from './../Controller/quiz.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuizDB2 } from "../Entities/quiz.entity";
import { Quiz2REpository } from "../Repository/quiz.repository";
import { CreatQuizDot } from '../Dtos/quiz.dto';



@Module({
imports:  [TypeOrmModule.forFeature([QuizDB2,Quiz2REpository]),QuizDB2,CreatQuizDot],
controllers: [],
providers: [],

})

export class Quiz2Module { }
