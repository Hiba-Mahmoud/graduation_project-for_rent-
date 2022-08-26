import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  
  transform(value:string, ...args: any): string{
    if(!value) return null;
    if(value == "apartment"){
     return "شقه";
    }else if(value == "room"){
     return "غرفه";
    }else{
      return "استديو"
    }
   }
  

}
