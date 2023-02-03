import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {
  transform(value: number) :string {
    let result:string;
    if(value > 0) {
      result = "+ ".concat(value.toString());
      return result;
    } else if(value == 0) {
      return value.toString();
    } else {
      result = "- ".concat((value*-1).toString());
      return result;
    }
  }

}
