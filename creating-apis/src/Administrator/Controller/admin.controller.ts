import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdminForm } from '../Dto/adminform.dto';
import { AdminService } from '../Services/admin.service';

@Controller('/admin')
export class AdminController {
  constructor(private adminService: AdminService,
    //private managerService: ManagerService
    ) {}

  @Get('/index')
  getAdmin(): any {
    return this.adminService.getIndex();
  }
  
  @Get('/findadmin/:id')
  getAdminByID(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.getUserByID(id);
  }

  @Get('/findadmin')
  getAdminByIDName(@Query() qry: any): any {
    return this.adminService.getUserByIDName(qry);
  }
  @Post('/insertadmin')
@UsePipes(new ValidationPipe())
  insertAdmin(@Body() mydto: AdminForm): any {
    return this.adminService.insertUser(mydto);
    }
}