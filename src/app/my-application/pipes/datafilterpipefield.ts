import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilterField'
})
export class DataFilterPipeField implements PipeTransform {

  transform(array: any[], query: string, field: string): any {
    if (query) {
      const ret = _.filter(array, row => row[field].indexOf(query) > -1);
      console.log(ret);
      return ret;
    }
    return array;
  }
}
