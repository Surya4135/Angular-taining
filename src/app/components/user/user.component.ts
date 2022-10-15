import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnChanges {
 
  @Input() productDetails:any
  @Input() filteredAvailableProductArr:any
  @Input() inputValue:any
  @Input() availabaleProduct:any
  @Output() purchaseid:EventEmitter<any> = new EventEmitter<any>();
  @Input() checkCount:any
  // minusCount:any
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.inputValue != '' && this.inputValue != undefined){
      if(this.filteredAvailableProductArr.length > 0){
        this.availabaleProduct = this.filteredAvailableProductArr
      }
       }
  }

  ngOnInit(): void {
    
  }

  buyProduct(purchaseid: any){
    this.productDetails.map((val:any)=>{
      if(val.id == purchaseid){
          this.purchaseid.emit(purchaseid) 
          console.log(val.count)
      }
    })
  }
}
