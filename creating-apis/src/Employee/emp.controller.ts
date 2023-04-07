import {  Body, Controller, Get, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { Delete, HttpCode, Param, Patch, /*Put,*/ UsePipes } from "@nestjs/common/decorators";
import { /*empdto,*/ empdto2 } from "./emp.dto";
import { EmpSer } from "./emp.service";


@Controller('emp')
export class EmployeeController{
    constructor(private EmpService: EmpSer) {}
    @Post('/insertUser')
    @HttpCode(300)
     @UsePipes(ValidationPipe)
     setUser(
         @Body() userName: empdto2,
        ): any {
const generatedId = this.EmpService.insertUser(
      userName
     );
     return generatedId + " its inserted!!"; 
    }
    @Get('/allUser')
    getUser() {  
        return this.EmpService.fatchUser();
     }
    @Get(':id') 
     getUserUsingID(@Param ('id') userId:number) {
        return this.EmpService.fatchUserUsingId(userId);
    }
    @Patch('/updateUser/:id')
    setUpdatedUser(
         @Param ('id') usingId:number,
        @Body() EmpInfo:empdto2
        ) {
            return this.EmpService.updatedUser(
            usingId,EmpInfo
             )
            }
    @Delete('/del/:id') 
        getDelUsingId(@Param('id') usingId:number) {
        return this.EmpService.setDeleteUsingId(usingId);
           }  
        }
          