import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonCallsService {
  constructor() { }
  generalProductDetails:any
  availableProductListForUser:any[] = []
  filteredProductListForAdmin:any[] = []
  filteredProductListForUser:any[]=[]
  allProducts(productDetails:any){
    this.generalProductDetails = productDetails;

    this.availableProductListForUser = productDetails.filter((val:any)=>{
      return val.avail == 'true'
    })
  }

  sendingMatchedInputValueofAdmin(adminSearchInput:any){
    console.log(adminSearchInput,this.generalProductDetails)
    if(adminSearchInput){
      this.filteredProductListForAdmin = this.generalProductDetails.filter((val:any)=>{
        return adminSearchInput == val.productName
        
      })
      console.log(this.filteredProductListForAdmin)
      if( this.filteredProductListForAdmin.length > 0){
        this.generalProductDetails = this.filteredProductListForAdmin
       }
    }
  }

  sendingMatchedInputValueofUser(userSearchInput:any){
    if(userSearchInput){
      this.filteredProductListForUser = this.availableProductListForUser.filter((val:any)=>{
        return userSearchInput == val.productName
      })

      if(this.filteredProductListForUser.length > 0){
        this.availableProductListForUser = this.filteredProductListForUser
      }
    }
  }
}
