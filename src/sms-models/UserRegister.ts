export class UserRegister{
    userFullName:string;
    email:string;
    password:string

    constructor(userFullName:string,email:string,password:string){
           this.userFullName = userFullName;
           this.email = email;
           this.password = password;
    }
}