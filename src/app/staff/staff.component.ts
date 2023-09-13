import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffServiceService } from './../Services/staff-service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  searchOrder: any;
  confirmed = 'confirmed';
  delivered = 'delivered';
  progress = 'progress';
  deliveredTime: any;
  response: any;
  filteredOrders: any[] = [];
  foodOrderId: Number = 0;

  constructor(private router: Router,private staffService: StaffServiceService) { }

  allOrders: any;
  staff = JSON.parse(localStorage.getItem('user')!);

  ngOnInit(): void {
    this.staffService.getAllFoodOrder(this.staff.id).subscribe((data) => {
      this.allOrders = data;
      this.searchOrder = this.allOrders.data; // Initialize filteredOrders
      console.log('List of all the Orders :', this.allOrders);
    });
  }

  filterOrders() {
    this.filteredOrders = this.allOrders.data.filter((order:any) => 
      order.customerName.toLowerCase().includes(this.searchOrder.toLowerCase())
    );
  }

  changeStatus(status: string, id: number) {
    console.log(status, id);
    this.staffService.updateOrderStatus(status, id).subscribe((r) => {
      console.log(r);
      this.response = r;
      if (!this.response.error) {
        alert('Order status updated to: ' + status);
        if (this.response.data.status == 'delivered') {
          this.deliveredTime = this.response.data.orderDeliveryTime;
          console.log(this.deliveredTime);

          window.location.reload();
        }
      } else {
        alert("Couldn't update status. Try again later! ");
      }
    });
  }

  deleteFoodOrder(orderID: number) {
    window.alert('Are you sure you want to delete the order?');
    console.log('delete btn clicked.Id:' + orderID);
    this.staffService.deleteFoodOrder(orderID).subscribe((response) => {
      console.log(response);
      this.router.navigate(['staff']);
      this.staffService.getAllFoodOrder(this.staff.id).subscribe((data) => {
        this.allOrders = data;
        console.log(this.allOrders);
      });
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
