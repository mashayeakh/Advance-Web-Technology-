import { isNotEmpty, IsNotEmpty, Length } from "class-validator";

export class ProductDto{
    //  declaring credentials and 
    // constructor so that we can can new products

    id: string; //id will be generated
    @IsNotEmpty()
    title: ProductDto;
    

    description: ProductDto;

    price: ProductDto;

    constructor(id: string, title: ProductDto, desc: ProductDto, price:ProductDto) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.price = price; 
        //now we are not gonna use in this way since ts gives us a shortcut

    }

    // constructor( // shortcuts of above codes
    //     public id: string,
    //     public title: string,
    //     public description: string,
    //     public price: number
    // ){}    
}