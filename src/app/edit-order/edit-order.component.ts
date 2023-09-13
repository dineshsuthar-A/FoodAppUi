import { Component, OnInit } from '@angular/core';
import { StaffServiceService } from '../Services/staff-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  allFoodOrders: any;
  reply: any;

  constructor(private staffServe : StaffServiceService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.staffServe.getAllFoodOrder(this.staff.id).subscribe((data) => {
      this.allFoodOrders = data;
      console.log('List of all the Orders :', this.allFoodOrders);

      for(let r of this.allFoodOrders.data){
        console.log(r);
        
        if(r.id==this.id){
          this.selectedProduct=r;
          this.totalOrderPrice = r.totalPrice;
                    
          break;
        }
      }
    });
   
     this.staffServe.getItem(this.id).subscribe((data)=>{
       this.allItems=data;
       console.log(this.allItems.data);
       for(let i of this.allItems.data){
        this.itemCountMap.set(i.id,i.quantity);
       }
       console.log(this.itemCountMap);
       
     })

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
    let updateOrder = {
      id:this.id,
      status: "confirmed",
      customerName: form.value.customerName,
      contactNumber: form.value.contactNumber,
      totalPrice: this.totalOrderPrice,
      orderCreatedTime: newDate
    };
    console.log('Staff id: ' + this.staff.id);
    console.log('Food Order Update : ', updateOrder);
    this.reply = confirm('Do you want to update the order? ');
    // if (this.reply == true) {
    //   this.staffServe.updateStatus(updateOrder).subscribe((r) => {
    //     this.res = r;
    //     console.log(this.res.message);
    //     if (!this.res.error) {
    //       alert('Food Order Updated successfully!');
    //       this.itemCountMap.forEach((value, key) => {
    //         let data={"id":key,"quantity":value};
    //         this.item.editItem(data).subscribe((p)=>{
    //           console.log(p);
    //         })
    //     });
    //       this.router.navigate(['/staff']);
    //     }
    //   });
      
    // }
  }

  resetTotalPrice() {
    this.totalOrderPrice = 0;
    console.log('Reset Working!');
  }

}
