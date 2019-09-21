import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namecapital'
})
export class NamecapitalPipe implements PipeTransform {

  transform(value: string): any {
    if (value) {
      let newvalue = value.charAt(0).toUpperCase() + value.slice(1);
      return newvalue;
    }
  }

}
