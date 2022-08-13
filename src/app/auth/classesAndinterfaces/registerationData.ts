export class IUser{
  firstName:string='';
  lastName:string="";
  name:string=this.getFullName();
  email:string='';
  password:string='';
  gender:string='';
  phone:string='';

  getFullName() :string{
 return this.firstName+" "+this.lastName;
  }
}
