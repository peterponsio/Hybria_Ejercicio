import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], text:string): any[] {
    
      return text != "" ?  list.filter(res => res.model.toLowerCase().includes(text.toLowerCase())) : list;
 

  }

}
