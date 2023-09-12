import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { BranchManagerDashboardComponent } from './branch-manager-dashboard/branch-manager-dashboard.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'manager', component:BranchManagerDashboardComponent},
  { path: 'addStaff', component: AddStaffComponent },
  {path:'staff', component: StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
