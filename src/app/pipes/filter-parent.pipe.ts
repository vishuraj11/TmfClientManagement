import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';


@Pipe({
  name: 'filterParent'
})
export class FilterParentPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

//   transform(items: any[], value: string): any[] {
//     console.log(items);
//     console.log(value)
// 		if (!items) return [];
// 		if (!value) return items;
// 		return items.filter(singleItem =>
// 		singleItem.clientName.toLowerCase().startsWith(value.toLowerCase())
// 		);

// }

transform(items: any[], searchText: string, fieldName: string): any[] {
  if (!items) { return []; }

  // return the original array if search text is empty
  if (!searchText) { return items; }

  // convert the searchText to lower case
  searchText = searchText.toLowerCase();

  return items.filter(item => {
    if (item && item[fieldName]) {
      return item[fieldName].toLowerCase().includes(searchText);
    }
    return false;
  });
}
}
