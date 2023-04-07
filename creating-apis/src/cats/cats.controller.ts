import { Controller,Get, HttpCode, Post, Req, Header, Put, ParseIntPipe} from '@nestjs/common';
import { Body, Delete, Param } from '@nestjs/common/decorators';
import { Observable, of } from 'rxjs';
//import { catsDto } from './cats.dto';
import { catsDto } from './cats.dto';


@Controller('cats')
export class CatsController {
  //constructor(private appService: AppService){}

    @Get()
    findingCats() {
        return "Cats Dashboard";
    }

    // using request obj to requst for all the cats
    @Get('/findRequest')
    findAll(@Req() r: Request):string {
        return "Requested for all the cats"
    }

    @Post()
    create(): string {
        return "this action adds a new cat"; 
    }
    
    // testing wildcard
    @Get("ab*cd")
    findAllForWildCard() {
        return "The route uses a wildCard...";
    }

    // status code Changing
    //response status code = 200 by default
    // in post the status code = 201 which is changable, see....
    @Get("code")
    @HttpCode(420)
    createStatusCode() {
        return "the httpcode has been changed and the new code is 420";
    }

    // custom headers
    @Post('header')
    @Header('Cache-Control', 'none')
    customHeader() {
        return 'header';
    }
    //route parameter
    //lets say, giving a id and returning that id
    @Get(':id')
    findOne(@Param() p):string { //params is uses to decorate a method parameter
        console.log("the id is"+p.id);
        return "the id is " + p.id;
    }

    @Get("/findId/:id")
    findId(@Param('id') identifier: string): string{
        //return "the action return a #${id} cat";
        //return `This action returns a #${id} cat`;
        return "Id is:" + identifier;
    }

    @Post("/settingName/:name")
    @HttpCode(420)
    findName(@Param('name') n: string) {
        return "The name is:" + n;
    }

    @Get()
    asy(): Observable<any[]> {
        return of([]);
    } 

    @Post("new")
    async createNewCat(@Body() catsDto: catsDto) {
        return "New Cat";
    }

    //   @Post("/insertuser")
    // //@UsePipes(new ValidationPipe())
    // insertUser(@Body() mydto:catsDto): any {
    //   return this.appService.insertUser(mydto);
    //   }
    
    // @Put("/updateuser/:id")
    // updateUserbyid( 
    //   @Body("name") name:string, 
    //   @Param("id", ParseIntPipe) id:number
    //   ): any {
    // return this.appService.updateUserbyid(name,id);
    // }

//       @Delete("/deleteuser/:id")
//   deleteUserbyid( 
//      @Param("id", ParseIntPipe) id:number
//       ): any {
//     return this.appService.deleteUserbyid(id);
//     }
}