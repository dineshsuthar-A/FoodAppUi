import { Component, OnInit } from '@angular/core';
import { StaffServiceService } from '../Services/staff-service.service';
import { Router } from '@angular/router';
import { ManagerServicesService } from '../Services/manager-services.service';

@Component({
  selector: 'app-branch-manager-dashboard',
  templateUrl: './branch-manager-dashboard.component.html',
  styleUrls: ['./branch-manager-dashboard.component.css']
})
export class BranchManagerDashboardComponent implements OnInit {

  deleteToast = false
  staffList: any



  constructor(private managerServices: ManagerServicesService, private route:Router) {
    managerServices.getStaffInfo().subscribe(res => {
      this.staffList = res;
    }, err => {
      alert("Server Error");
      console.log(err);
    })
  }

  ngOnInit(): void {
    this.deleteToast = false;
  }

  logout(): void{
    console.log('press');
    localStorage.removeItem("user");
    this.route.navigate(['/'])
  }


  getStaff() {
    this.managerServices.getStaffInfo().subscribe(res => {
      this.staffList = res;
    }, err => {
      alert("Server Error");
      console.log(err);
    })
  }

  
  
  delete(id: any) {
    this.managerServices.deleteStaff(id).subscribe(res => {
      this.getStaff();
      this.deleteToast = true;
    }, err => {
      alert("Error occured");
    });
    const self = this;
    setTimeout(function (deleteToast:any ) {
      self.deleteToast =  false;
    }.bind(this), 3000); 
  }
  

  
  changeToastVisibility() {
    this.deleteToast = !this.deleteToast;
  }
}
