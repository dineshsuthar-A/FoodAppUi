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

  ngOnInit(): void {
  }

}
