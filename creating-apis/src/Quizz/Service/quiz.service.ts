import { CreatQuizDot } from './../Dtos/quiz.dto';
import { Quiz2REpository } from './../Repository/quiz.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Quiz2Service{

    constructor(
        @InjectRepository(Quiz2REpository) private quizRepository: Quiz2REpository,
    ) { }

    CreateQuiz(q:CreatQuizDot) {
        return this.quizRepository.save(q);
    }


}