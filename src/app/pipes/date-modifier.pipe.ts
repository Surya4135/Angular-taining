import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateModifier'
})
export class DateModifierPipe implements PipeTransform {
reverseDate:any
longDate:any
formattedDate:any
  transform(date:any) {
    if(date){

      const [day,month,year] = date.split('-')
       this.reverseDate = year + '-' + month + '-' + day
      this.longDate = new Date(this.reverseDate)

       this.formattedDate = this.longDate.toLocaleDateString('en-US',{
          month:'long',
          day: '2-digit',
          weekday:'long'
      }).split(' ').slice(0,-1)

      return this.formattedDate[0].replace(',', '') +' '+day +',' + this.formattedDate[1]+ " " +month+"," + year
    }
    return false
  }

}
