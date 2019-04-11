import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data, inputVal:string, otherVal?:string): any {
    if(data.length === 0 || inputVal === ""){
      return data
    }

    return data.filter((car) => String(car[otherVal]).toLowerCase().indexOf(inputVal.toLowerCase()) !== -1)
  }

}
