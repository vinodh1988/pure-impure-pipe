import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyfilterPipe implements PipeTransform {
  constructor(public ds:DataService){}

  transform(target: unknown): unknown {
    return this.ds.getDataNow(target);
  }

}
