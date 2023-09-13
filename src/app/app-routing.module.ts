import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { BranchManagerDashboardComponent } from './branch-manager-dashboard/branch-manager-dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { FoodProductComponent } from './food-product/food-product.component';
import { AddFoodProductComponent } from './add-food-product/add-food-product.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[AuthGuardGuard] },
  { path:'manager', component:BranchManagerDashboardComponent},
  { path: 'addStaff', component: AddStaffComponent },
  { path: 'edit/:id', component: AddStaffComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardGuard] },
  { path: 'foodproduct', component: FoodProductComponent },
  { path: 'addfoodproduct', component: AddFoodProductComponent },
  { path: 'editproduct/:id', component: AddFoodProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
