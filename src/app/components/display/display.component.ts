import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit,OnChanges {
[x: string]: any;

  @Input() productDetails: any;
  inputValue:any
  sentCheckCountTouser:any
  availableProductDetails!: any[];
  sentPuchaseid:any;
  filteredProductArr:any
  filteredAvailableProductArr:any
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.availableProductDetails = this.productDetails.filter((val: any) =>{
      return val.avail == 'true';
    })
  }

  ngOnInit(): void {
  }
  getPurchaseid(purchaseid: any){
    this.sentPuchaseid = purchaseid;
    this.productDetails = [...this.productDetails]
  }

  // getCheckcount(checkCount:any){
  //   this.sentCheckCountTouser = checkCount
  // }
  filteredProduct(){
    if(this.inputValue != '' && this.inputValue != undefined){
      this.filteredProductArr = this.productDetails.filter((val:any)=>{
        if (val.productName == this.inputValue){
          return val;
        }
      })
      this.filteredAvailableProductArr = this.availableProductDetails.filter((val:any)=>{
        if(val.productName == this.inputValue){
          return val
        }
      })
    } 
    // if(this.inputValue == '' && this.inputValue == undefined){
    //   this.filteredProductArr = []
    //   this.productDetails = [...this.productDetails]
    // }
  }
}
