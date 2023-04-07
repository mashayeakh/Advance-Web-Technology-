import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { IsInt, IsPhoneNumber, Min } from "class-validator";


export class AdminDto{

    @IsNotEmpty()
    name: AdminDto;

    id: any;
    email: string;
    password: string;
    phoneNumber: number;
    age: number;
    type: string;
    constructor(
         name: AdminDto,
         id: any,
         email: string,
         password: string,
         phoneNumber: number,
         age: number,
         type: string
    ) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.type = type;
    }
}

export class InsertAdminDto2{

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty({message:"Name cant be empty!"})
    name: AdminDto;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

    @IsInt({message:"phone number cant be empty!"})
    phoneNumber: number;

    @Min(30)
    @IsInt({message:"age must br 30+"})
    age: number;

    @IsNotEmpty({message:"Cant be empty!"})
    type: string;
}