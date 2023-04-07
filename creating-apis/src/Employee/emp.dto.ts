import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength,
    IsInt,IsPhoneNumber, Min  } from "class-validator";

export class empdto{
    @IsNotEmpty()
    name: empdto;
    
    id: any;
    email: string;
     password: string;
     phoneNumber: number;
     age: number;
     type: string;
     constructor(
        name: empdto,
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

        export class empdto2{
            @IsString()
            @MinLength(4)
            @MaxLength(20)
            
            @IsNotEmpty({message:"Name cant be empty!"})
            name: empdto2;   

            @IsEmail()
            email: string;
            @IsString()
            @MinLength(6)
            @MaxLength(18)
            @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              {message: 'password is weak'})
            password: string;

            @IsInt({message:"phone number empty!"})
            phoneNumber: number;

            @Min(30)
            @IsInt({message:"age 30+"})
            age: number;
            @IsNotEmpty({message:"empty!"})
            type: string;
        }