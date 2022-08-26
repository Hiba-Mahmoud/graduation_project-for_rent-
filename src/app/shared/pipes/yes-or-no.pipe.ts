import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesOrNo'
})
export class YesOrNoPipe implements PipeTransform {

  transform(value:string, ...args: any): string{
    if(!value) return null;
    if(value == "yes"){
     return "نعم";
    }else{
     return "لا";
    }
   }
  

}
