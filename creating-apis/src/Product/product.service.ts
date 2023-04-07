import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductDto } from "./product.dto";

@Injectable()
export class ProductService{
    // now our product  type will be ProductDto
     products: ProductDto[] = [];

    // a method that will insertProducts 
    insertProduct(title: ProductDto, description: ProductDto, price: ProductDto) {
        // since we want id to be generated dynamically,
        const id = (Math.random()*100).toPrecision(2).toString();
        
        const newProducts = new ProductDto(id, title, description, price);
        // now pushing our just created newProducts in our empty array
        this.products.push(newProducts);
        return id;
        //return "inserted!!!!!"
    }

    getAllProducts(){
        return this.products;
    }
// fatching single product usring id
    getSingleUsingId(singleProductId:string) {
        /*const singleProduct = this.products.find(
            product => product.id === singleProductId
        );        
        // what if we don't find the id
        if (!singleProduct) {
            throw new NotFoundException("Could not find!");
        }
        return singleProduct;*/
        
        return this.findingId(singleProductId);
    }

    // updating products
    // updatingProduct(id: string, title: string, description: string, price:number) {
    //     // let product = this.findingId(id)[0];
    //     // let index = this.findingId(id)[ 1 ];

    //     let [ product, index ] = this.findingId(id);
    //     let updatingProduct = product;

    //     if (title) { updatingProduct.title=title; }
    //     if (description) { updatingProduct.description=description; }
    //     if (price) { updatingProduct.price=price; }
        
    //     this.products[ index ] = product;
    // }

    //  findingId(singleProductId:string):[ProductDto, number] {
    //     const singleProductIndex = this.products.findIndex(
    //         product => product.id === singleProductId);
    //      const singleProduct = this.products[singleProductIndex];
    //     if (!singleProduct) {
    //         throw new NotFoundException("Could not find!");
    //     }
    //     return [singleProduct,singleProductIndex];
    // }

    updatingProduct(id: string, title: ProductDto, description: ProductDto, price:ProductDto) {
        // let product = this.findingId(id)[0];
        // let index = this.findingId(id)[ 1 ];

        let product = this.findingId(id);
        let updatingProduct = product;

        if (title) { updatingProduct.title=title; }
        if (description) { updatingProduct.description=description; }
        if (price) { updatingProduct.price=price; }
        
        this.products;
    }

    deleteProduct(id: string) {
         const index = this.findingId(id);
        // const removePro = this.products[];

        // const count = 0;
        
        // while (count < this.products.length) {
        // if (this.products[count].id === index) {
        //         delete this.products[ count ];
        //         return "Deleted";
        //     }
        //     count++;
        // }

        const p = this.products.indexOf(index);
        this.products.splice(p,1); 
    }
     findingId(singleProductId:string) {
        const singleProduct= this.products.find(
            product => product.id === singleProductId);
         //const singleProduct = this.products[singleProductIndex];
        if (!singleProduct) {
            throw new NotFoundException("Could not find!");
        }           
        return singleProduct;
    }
}