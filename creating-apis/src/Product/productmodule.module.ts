import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./porduct.controller";
import { ProductService } from "./product.service";



@Module({
imports:  [],
controllers: [ProductController],
providers: [ProductService],

})

export class ProductModule {}