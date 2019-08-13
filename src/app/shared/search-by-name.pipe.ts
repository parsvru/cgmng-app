import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchByName'})
export class SearchByNamePipe  implements PipeTransform {

    transform( value: any = [], searchString: string ) {

       if (!searchString) {
         return value;
       }

       return value.filter( it => {
         const name = it.name.toLowerCase().includes(searchString);
         return name;
       });
    }
}