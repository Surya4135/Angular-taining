import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, trimSize:any) {
    if(value.length > trimSize) {
        return value.substr(0,trimSize)+'...'
    }
    return value;
}

}
