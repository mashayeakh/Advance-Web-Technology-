import { Injectable, NotFoundException } from "@nestjs/common";
import { AdminDto } from "./admin.dto";

@Injectable()
export class AdminService{
    
    // an admin type arr
    AdminArr=[];
    
    insertUser(
        obj: any,
        
    ) {

        const dynamicId = ((Math.random() * 100).toPrecision(2).toString());
        
        //calling AdminDto Construtor
        //const newUser= new AdminDto(name, dynamicId, email, password, phoneNumber, age, type);
        
        let newUser = { id: dynamicId, name: obj.name, age: obj.age, password: obj.password, email: obj.email, type: obj.type, phoneNumebr:obj.phoneNumber}

        // since we are dealing with arr, we need to push this newUser to arr
        this.AdminArr.push(newUser);
        return dynamicId;  
    }

    fatchUser() {
        return this.AdminArr;
    }

    fatchUserUsingId(id:number) {
        return this.findingID(id);
    }

    updatedUser(
        id: number, adminObj:any
    ) {
        const updatingUser = this.findingID(id);
        
        if (adminObj.name) { updatingUser.name = adminObj.name; }
        if (adminObj.age) { updatingUser.age = adminObj.age; }
        if (adminObj.password) { updatingUser.password = adminObj.password; }
        if (adminObj.email) { updatingUser.email = adminObj.email; }
        if (adminObj.type) { updatingUser.type = adminObj.type; }
        if (adminObj.phoneNumber) { updatingUser.phoneNumber = adminObj.phoneNumber; }
    }

    setDeleteUsingId(id:number) {
        const searchigId = this.findingID(id);
        const del = this.AdminArr.indexOf(searchigId);

        this.AdminArr.splice(del, 1);
    }

    private findingID(id:number) {
        const singleUser = this.AdminArr.find(user=>user.id===id);
        
        if (!singleUser) {
            throw new NotFoundException ('Could not find!!!');
        }
        return singleUser;
    }

    
}