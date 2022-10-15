import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDontAllowNumber]'
})
export class DontAllowNumberDirective {

  constructor(private ele:ElementRef) { 

  }
  @HostListener('input') DontAllowNumberDirective(){
      this.ele.nativeElement.value = this.ele.nativeElement.value.replace(/[0-9]/g,'')
  }
}
