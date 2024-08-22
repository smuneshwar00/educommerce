import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise',
  standalone: true
})
export class CapitalisePipe implements PipeTransform {

  transform(value: string): unknown {

    if(!value){
      return ""
    }

    return value.split(" ").map( (word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } ).join(" ");
  }

}
