import { Quiz2Service } from './../Service/quiz.service';
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatQuizDot } from '../Dtos/quiz.dto';
@Controller('Quizz')
export class Quiz2Controller{

    constructor(private readonly myService: Quiz2Service) {}
    
    @Post("/create")
    @UsePipes(ValidationPipe)
    CreateQuiz(@Body() quiz:CreatQuizDot) {
        return this.myService.CreateQuiz(quiz);
    }
 
}