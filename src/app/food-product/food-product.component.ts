import { Component, OnInit } from '@angular/core';
import { ManagerServicesService } from '../Services/manager-services.service';
import { error } from 'console';

@Component({
  selector: 'app-food-product',
  templateUrl: './food-product.component.html',
  styleUrls: ['./food-product.component.css']
})
export class FoodProductComponent implements OnInit {

  FoodProductList: any
  
  constructor(private service: ManagerServicesService) { 
    this.service.getFoodProducts().subscribe((res: any) => {
      this.FoodProductList = res?.data;
    }, (error: any) => {
      alert("Server error");
    });
  }

  changeAvailability(id: any, data: any) {
    data.availability = !data.availability;
    this.service.updateProduct(id, data).subscribe((res: any) => {
      console.log(res);

    }, (err: any) => {
      alert("server Error");
    })
  }

  getFoodProduct() {
    this.service.getFoodProducts().subscribe((res: any) => {
      this.FoodProductList = res?.data;
    }, (error: any) => {
      alert("Server error");
    });
  }

  deleteFoodProduct(id: any) {
    this.service.deleteFoodProduct(id).subscribe((res: any) => {
      alert("Product Deleted");
      this.getFoodProduct();
    }, (error) => {
      console.log("Server Error");
    })
  }


  ngOnInit(): void {
  }

}
