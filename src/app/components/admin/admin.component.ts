import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonCallsService } from 'src/app/service/common-calls.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit,OnChanges {
  inputValue:any = ''
  productDetails:any
  filteredProductArr:any
  constructor(private service:CommonCallsService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
   console.log(this.service.generalProductDetails)
    this.productDetails = this.service.generalProductDetails
  }

  getMathcedProduct(){
    this.service.sendingMatchedInputValueofAdmin(this.inputValue)
    this.productDetails = this.service.generalProductDetails
  }

}
