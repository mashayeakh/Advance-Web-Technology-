import { IsNotEmpty, Length } from "class-validator";

export class CreatQuizDot{
    @IsNotEmpty()
    @Length(3, 255)
    
    title: string;

    @IsNotEmpty()
    @Length(3, 255)
    description: string;
}