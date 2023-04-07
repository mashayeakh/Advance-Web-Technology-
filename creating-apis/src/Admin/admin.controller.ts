import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { Delete, HttpCode, Param, Patch, UsePipes } from "@nestjs/common/decorators";
import { AdminDto,InsertAdminDto2 } from "./admin.dto";
import { AdminService } from "./admin.service";

@Controller('admin')
export class AdminController{

    constructor(private adminService:AdminService){}
    // now what would i insert?
    // name, id, email, phone-number, password, age
    // go to dto, id will be created dynamically
    @Post('/insertUser')
    @HttpCode(300)
    @UsePipes(ValidationPipe)
    setUser(
        @Body() userName: InsertAdminDto2,
        
    ): any {
        const generatedId = this.adminService.insertUser(
            userName
        
        );
        return generatedId + " inserted!!";
    }

    @Get('/allUser')
    getUser() {
        return this.adminService.fatchUser();
    }

    @Get(':id')
    getUserUsingID(@Param ('id') userId:number) {
        return this.adminService.fatchUserUsingId(userId);
    }

    @Patch('/updateUser/:id')
    setUpdatedUser(
        @Param ('id') usingId:number,
        @Body() adminInfo:InsertAdminDto2 
    ) {
        return this.adminService.updatedUser(
            usingId, adminInfo
    )
    }

    @Delete('/del/:id')
    getDelUsingId(@Param('id') usingId:number) {
        return this.adminService.setDeleteUsingId(usingId);
    }
}