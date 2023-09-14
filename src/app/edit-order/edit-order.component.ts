import { Component, OnInit } from '@angular/core';
import { StaffServiceService } from '../Services/staff-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ManagerServicesService } from '../Services/manager-services.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  id:number = 0;
  selectedProduct:any;
  res : any;
  orderItems : any;
  totalOrderPrice: number = 0;
  itemCountMap = new Map<number, number>();
  staff = JSON.parse(localStorage.getItem("user")!);
  allItems : any;
  reply: any;
  items: any;

  constructor(private staffServe : StaffServiceService, private router : Router, private route:ActivatedRoute, private manager:ManagerServicesService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
  
    this.staffServe.getOrderById(this.id).subscribe((data: any) => {
      
      this.selectedProduct = data?.data;
      for (let i of data?.data?.items) {
        this.itemCountMap.set(i.productId, i.quantity);
      }
      this.totalOrderPrice = this.selectedProduct?.totalPrice;
    });

    this.manager.getFoodProducts().subscribe((res: any) => {
      this.allItems = res?.data;
    });

   
  }

  addNewItem(itemId: any, itemPrice: any) {
    if (this.itemCountMap.has(itemId)) {
      this.itemCountMap.set(itemId, this.itemCountMap.get(itemId)! + 1);
      this.totalOrderPrice += itemPrice;
    }
    else {
      this.itemCountMap.set(itemId, 1);
      this.totalOrderPrice += itemPrice;
    }
  }

  removeItem(itemId: any, itemPrice: any) {
    console.log(this.itemCountMap);
    if (this.itemCountMap.has(itemId)) {
      if (this.itemCountMap.get(itemId) === 0) {        
      } else {
        this.itemCountMap.set(itemId, this.itemCountMap.get(itemId)! - 1);
        this.totalOrderPrice -= itemPrice;
      }
    }
  }

  updateOrder(form: NgForm) {
    const newDate = new Date();
    this.items = [];
    let flag: any = 0;
    this.itemCountMap.forEach((value, key) => {
      this.allItems.forEach((element:any) => {
        if (key == element?.id) {
          let data = { id: element?.id != 0 ? element?.id : 0, productId: key, name: element?.name, type: element?.type, price: element?.price, quantity: value };
          this.items.push(data);
        }
      });
    });
    console.log(this.items);
    let updateOrder = {
      id:this.id,
      status: "confirmed",
      customerName: form.value.customerName,
      contactNumber: form.value.contactNumber,
      totalPrice: this.totalOrderPrice,
      orderCreatedTime: newDate,
      items: this.items
    };
    console.log('Staff id: ' + this.staff.id);
    console.log('Food Order Update : ', updateOrder);
    this.reply = confirm('Do you want to update the order? ');
    this.staffServe.updateOrder(updateOrder).subscribe((res) => { 
      console.log(res);
      this.router.navigate(['/staff'])
    });
  }

  resetTotalPrice() {
    this.totalOrderPrice = 0;
    console.log('Reset Working!');
  }

}
