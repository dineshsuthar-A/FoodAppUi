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
  result: any;

  constructor(private route: ActivatedRoute, private staff: StaffServiceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);

    this.staff.getOrderById(id).subscribe((data) => {
      this.orderDetails = data;
      console.log(this.orderDetails);
    });

    this.staff.getItem(id).subscribe((data) => {
      this.result = data;
      console.log(this.result);
    });
  }

  printInvoice() {
    window.print();
  }

}
