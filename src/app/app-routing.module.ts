import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { BranchManagerDashboardComponent } from './branch-manager-dashboard/branch-manager-dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { FoodProductComponent } from './food-product/food-product.component';
import { AddFoodProductComponent } from './add-food-product/add-food-product.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { BillComponent } from './bill/bill.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ManagerGuardGuard } from './Guards/manager-guard.guard';
import { StaffGuardGuard } from './Guards/staff-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[AuthGuardGuard] },
  { path:'manager', component:BranchManagerDashboardComponent, canActivate:[ManagerGuardGuard]},
  { path: 'addStaff', component: AddStaffComponent, canActivate:[ManagerGuardGuard] },
  { path: 'edit/:id', component: AddStaffComponent, canActivate:[ManagerGuardGuard] },
  { path: 'staff', component: StaffComponent, canActivate:[StaffGuardGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardGuard] },
  { path: 'foodproduct', component: FoodProductComponent, canActivate:[ManagerGuardGuard] },
  { path: 'addfoodproduct', component: AddFoodProductComponent, canActivate:[ManagerGuardGuard] },
  { path:'editproduct/:id', component:AddFoodProductComponent, canActivate:[StaffGuardGuard] },
  { path: 'create-order', component: CreateOrderComponent, canActivate:[StaffGuardGuard]  },
  { path: 'bill/:id', component: BillComponent, canActivate:[StaffGuardGuard]  },
  { path: 'edit-order/:id', component:EditOrderComponent, canActivate:[StaffGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
