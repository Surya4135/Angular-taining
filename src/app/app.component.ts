import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
  }

  inputProductName:any = '';
  inputProductType:any = '';
  inputCost:any= '';
  inputAvail:any= ''; 
  inputCount:any= '';

  productDetails:any[] =[]

  pushData(){
    this.productDetails.push({
      productName:this.inputProductName,
      productType: this.inputProductType,
      cost:this.inputCost,
      avail:this.inputAvail,
      count: this.inputCount,
      id: this.productDetails.length + 1
    })
    this.productDetails = [...this.productDetails]
    this.inputProductName = '';
    this.inputProductType = '';
    this.inputCost = '';
    this.inputAvail = '';
    this.inputCount = '';
  }
}
