import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiSearch',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return null;
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((item : any)=>{
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })
  }

}
