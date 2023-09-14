import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffServiceService } from './../Services/staff-service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  searchOrder: string;
  confirmed = 'confirmed';
  delivered = 'delivered';
  progress = 'progress';
  deliveredTime: any;
  response: any;
  filteredOrders: any[] = [];
  foodOrderId: Number = 0;

  constructor(private router: Router, private staffService: StaffServiceService) { 
    this.searchOrder = "";
  }

  allOrders: any;
  staff = JSON.parse(localStorage.getItem('user')!);

  ngOnInit(): void {
    this.staffService.getAllFoodOrder(this.staff.id).subscribe((data) => {
      this.allOrders = data;
      this.filteredOrders = this.allOrders?.data;
      console.log('List of all the Orders :', this.allOrders);
    });
  }

  getOrderData(): any{
    this.staffService.getAllFoodOrder(this.staff.id).subscribe((data) => {
      this.allOrders = data;
      this.filteredOrders = this.allOrders?.data;
      console.log('List of all the Orders :', this.allOrders);
    });
  }

  filterOrders() {
    this.filteredOrders = this.allOrders.data.filter((order:any) => 
      order.customerName.toLowerCase().includes(this.searchOrder.toLowerCase())
    );
  }

  getDateTime(time: number):string {
    const date = new Date(time);
     const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

    return date.toLocaleString('en-US', options);
  }
  changeStatus(status: string, order: any) {
    console.log(status, order);
    order.status = status;
    this.staffService.updateOrder(order).subscribe((r) => {
      console.log(r);
      this.getOrderData();
    });
  }

  deleteFoodOrder(orderID: number) {
    let result = confirm('Are you sure you want to delete the order?');
    if (result == false) {
      return;
    }
    this.staffService.deleteFoodOrder(orderID, this.staff?.id).subscribe((response) => {
      console.log(response);
      this.router.navigate(['staff']);
      this.staffService.getAllFoodOrder(this.staff.id).subscribe((data) => {
        this.allOrders = data;
        console.log(this.allOrders);
        this.getOrderData();
      });
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
