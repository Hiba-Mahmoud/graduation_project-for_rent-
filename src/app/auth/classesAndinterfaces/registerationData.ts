export class IUser{
  firstName:string='';
  lastName:string="";
  name:string=this.getFullName();
  email:string='';
  password:string='';
  gender:string='';
  phone:string='';
  code:number;
  password_confirmation:string='';

  getFullName() :string{
 return this.firstName+" "+this.lastName;
  }
}
