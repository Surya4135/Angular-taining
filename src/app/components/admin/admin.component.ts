import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit,OnChanges {
  @Input() productDetails :any
  @Input() getPurchaseid:any
  @Input() filteredProductArr:any
  @Input() inputValue:any
  // @Output() sentCheckCount:EventEmitter<any> = new EventEmitter<any>();
  // checkCount:any
  constructor() { 
  }
  ngOnChanges(changes: SimpleChanges): void {
   if(this.getPurchaseid){
    this.productDetails.map((val:any) =>{
      if(val.id == this.getPurchaseid){
        --val.count;
        // this.checkCount = val.count;
        // if(this.checkCount == 0){
          
        //   this.sentCheckCount.emit(this.checkCount)
        // }
      }
    })
   }
  if(this.inputValue != '' && this.inputValue != undefined){
    if( this.filteredProductArr.length > 0){
      this.productDetails = this.filteredProductArr
     }
  }
  
  }
  ngOnInit(): void {
   
  }

}
  function ngOnInit() {
    throw new Error('Function not implemented.');
  }

