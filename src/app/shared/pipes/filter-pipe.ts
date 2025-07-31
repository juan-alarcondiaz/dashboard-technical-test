import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return Object.keys(item).some(key => {
        const value = item[key];
        return value && value.toString().toLowerCase().includes(searchText);
      });
    });
  }

}
