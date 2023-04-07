import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminService } from "src/Admin/admin.service";
import { AdminController } from "../Controller/admin.controller";
import { AdminForm } from "../Dto/adminform.dto";
import { AdminFormUpdate } from "../Dto/adminformupdate.dto";
import { AdminEntity } from "../Entities/ad.entities";


@Module({
imports: [TypeOrmModule.forFeature([AdminEntity]),AdminEntity,AdminForm,AdminFormUpdate],
controllers: [],
providers: [],

})

export class AdminModule {}