import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value:string, ...args: any): string{
    if(!value) return null;
    if(value == "male"){
     return "ذكر";
    }else{
      return "انثى"
    }
   }


}
