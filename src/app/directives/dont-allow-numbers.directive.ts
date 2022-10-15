import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDontAllowNumbers]'
})
export class DontAllowNumbersDirective {

  
  constructor(private ele:ElementRef) { 

  }
  @HostListener('input') DontAllowNumberDirective(){
      this.ele.nativeElement.value = this.ele.nativeElement.value.replace(/[0-9]/g,'')
  }
}

