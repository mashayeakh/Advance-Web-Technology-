import { Body, Controller, Get, Post, Delete, ValidationPipe, ParseFloatPipe } from "@nestjs/common";
import { HttpCode, Param, Patch, UsePipes } from "@nestjs/common/decorators";
import { ProductDto } from "./product.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController{

    constructor(private readonly pService:ProductService) {}
    @Post('/insertPro')
    @HttpCode(203)
    @UsePipes(ValidationPipe)
    addProducts( 
        @Body('title') proTitle: ProductDto,
        @Body('desc') proDescription: ProductDto,
        @Body('price') proPrice: ProductDto
    
    ):any {
        const generatedId = this.pService.insertProduct(
            proTitle,
            proDescription,
            proPrice,
        );
        // now i just wanna return id only
        return generatedId+ "Insertedd!!!!";
    }

    @Get('/allPro')
    getAllProducts(): any{
        return this.pService.getAllProducts();
    }

    @Get(':id')
    getProductById(@Param('id') proId:string) {
        return this.pService.getSingleUsingId(proId);
    }
// updating data using id, i will be using patch req insted of put since we
// need to merge with the existing product and we don't want to replace the product
    @Patch(':id')
    updatedProduct(
        @Param('id') proId: string,
        @Body('title') proTitle: ProductDto, 
        @Body('description') proDescriptin: ProductDto, 
        @Body('price') proPrice:ProductDto
    ) {
        this.pService.updatingProduct(proId, proTitle, proDescriptin, proPrice);
        return null;
    }

    // Deleting product through id
    @Delete(':id')
    removeProduct(@Param ('id')proId:string) {
        this.pService.deleteProduct(proId);
        return null;
    }
}