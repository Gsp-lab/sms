 export class UserToken{
    token:string;

    userName:string;

    roles:string
  constructor(token:string,userName:string,roles:string){
      this.token = token;
      this.userName = userName;
      this.roles = roles;
  }
}