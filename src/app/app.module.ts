import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './staff/staff.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchManagerDashboardComponent } from './branch-manager-dashboard/branch-manager-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { FoodProductComponent } from './food-product/food-product.component';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { AddFoodProductComponent } from './add-food-product/add-food-product.component';
import { BillComponent } from './bill/bill.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchManagerDashboardComponent,
    LoginComponent,
    StaffComponent,
    AddStaffComponent,
    FoodProductComponent,
    NavManagerComponent,
    AddFoodProductComponent,
    BillComponent,
    CreateOrderComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
