import { Component, OnInit } from '@angular/core';
import { CommonCallsService } from 'src/app/service/common-calls.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private service:CommonCallsService){

  }

  ngOnInit(): void {
  }

  inputProductName:any = '';
  inputProductType:any = '';
  inputCost:any= '';
  inputAvail:any= ''; 
  inputCount:any= '';
  inputDate:any = '';
  inputDesc: any ='';
  productDetails:any[]= []
  pushData(){
    this.productDetails.push({
    
      productName:this.inputProductName,
      productType: this.inputProductType,
      cost:this.inputCost,
      avail:this.inputAvail,
      count: this.inputCount,
      id: this.productDetails.length + 1,
      date: this.inputDate,
      description : this.inputDesc
    })
    this.inputProductName = '';
    this.inputProductType = '';
    this.inputCost = '';
    this.inputAvail = '';
    this.inputCount = '';
    this.inputDate = '';
    this.inputDesc ='';
    this.service.allProducts(this.productDetails)
  }
}
