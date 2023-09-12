import { Component, OnInit } from '@angular/core';
import { StaffServiceService } from '../Services/staff-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-manager-dashboard',
  templateUrl: './branch-manager-dashboard.component.html',
  styleUrls: ['./branch-manager-dashboard.component.css']
})
export class BranchManagerDashboardComponent implements OnInit {

  deleteToast = false
  staffList: any



  constructor(private staffService: StaffServiceService, private route:Router) {
    staffService.getStaffInfo().subscribe(res => {
      this.staffList = res;
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
    this.staffService.getStaffInfo().subscribe(res => {
      this.staffList = res;
    })
  }

  
  
  delete(id: any) {
    this.staffService.deleteStaff(id).subscribe(res => {
      console.log(res);
      this.getStaff();
      this.deleteToast = true;
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
