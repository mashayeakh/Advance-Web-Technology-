import { Injectable,NotFoundException } from "@nestjs/common";
//import { empdto, empdto2 } from "./emp.dto";


@Injectable()
export class EmpSer {
    EmpArr=[];
     insertUser(
         obj: any,
         ) {
            const dynamicId = ((Math.random() * 100).toPrecision(2).toString());
            let newUser = { id: dynamicId, 
                name: obj.name, age: obj.age, 
                password: obj.password, 
                email: obj.email, type: obj.type, 
                phoneNumebr:obj.phoneNumber} 
                this.EmpArr.push(newUser); 
                return dynamicId;  
        } 
        fatchUser() {
            return this.EmpArr;
            }      
           fatchUserUsingId(id:number) {
               return this.findingID(id);
            }
            updatedUser(
               id: number, empObj:any) 
           { 
               const updatingUser = this.findingID(id);
               if (empObj.name) { updatingUser.name = empObj.name; }
               if (empObj.age) { updatingUser.age = empObj.age; }
               if (empObj.password) { updatingUser.password =empObj.password; }
               if (empObj.email) { updatingUser.email = empObj.email; }
               if (empObj.type) { updatingUser.type = empObj.type; }
               if (empObj.phoneNumber) { updatingUser.phoneNumber = empObj.phoneNumber; }
           }
           setDeleteUsingId(id:number) {
               const searchigId = this.findingID(id);
               const del = this.EmpArr.indexOf(searchigId);
               this.EmpArr.splice(del, 1);
           }
            private findingID(id:number) {
               const singleUser = this.EmpArr.find(user => user.id === id);
               if (!singleUser) {
                   throw new NotFoundException ('not find iddd!!!');
               }
            return singleUser;
            }
       }  
        