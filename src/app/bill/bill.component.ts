import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffServiceService } from '../Services/staff-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  orderDetails: any;
  items: any;

  constructor(private route: ActivatedRoute, private staff: StaffServiceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.staff.getOrderById(id).subscribe((data:any) => {
      this.orderDetails = data?.data;
      this.items = data?.data?.items;
    });
  }

  printInvoice() {
    window.print();
  }

}
