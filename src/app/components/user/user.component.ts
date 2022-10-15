import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonCallsService } from 'src/app/service/common-calls.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnChanges {
  inputValue:any
  availabaleProduct:any
 
  constructor(private service:CommonCallsService) { }
 
  ngOnChanges(changes: SimpleChanges): void {
  }
  
  ngOnInit(): void {
    this.availabaleProduct = this.service.availableProductListForUser
  }

  getMathcedProduct(){
    this.service.sendingMatchedInputValueofUser(this.inputValue)
    this.availabaleProduct = this.service.availableProductListForUser
  }

  buyProduct(purchaseid:any){
    this.service.generalProductDetails.map((val:any)=>{
      if(val.id == purchaseid){
        --val.count
      }
  })
  }
}
