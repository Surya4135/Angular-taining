import { Directive, ElementRef,HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverDescription]'
})
export class HoverDescriptionDirective implements OnInit {
  @Input('tooltip') description:any
  constructor(private el:ElementRef) { 
    console.log(this.el)
    console.log(this.description)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @HostListener('mouseenter') AllowNumberDirective(){
    // let span = document.createElement('span')
    // span.textContent = this.description
    //   this.el.nativeElement.insertAfter(span, this.el.nativeElement) 
    // console.log(this.el.nativeElement.className,this.description )

    
    // let html = `<span class="show">${this.description}<span/>`
    // document.querySelector('.check')?.insertAdjacentHTML('afterend',html)
    // console.log(this.description)
  }

  @HostListener('mouseleave') DontAllowNumberDirective(){
    this.el.nativeElement.className = 'hidden'
    console.log(this.el.nativeElement.className )
  }
}
