import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor(private http: HttpClient) { }
  
  getStaffInfo() {
    return this.http.get(environment.apiUrl + "user/staff/findAll");
  }

  deleteStaff(id:any) {
    return this.http.delete(environment.apiUrl+"user/userid/"+id);
  }

  //Order Status for Staff Conponent Start
  updateOrder(order:any){
    return this.http.put(`${environment.apiUrl}foodorder/update`, order)
  }

  deleteFoodOrder(value: number, userid:any) {
    return this.http.delete(`${environment.apiUrl}foodorder/delete?orderId=${value}&userId=${userid}`);
  }

  //End

  //ITEM SERVICES START

  getItem(foodOrderId: Number){
    return this.http.get(`http://localhost:8080/item/${foodOrderId}`);
  }

  getOrderById(value: number) {
    return this.http.get(`http://localhost:8080/foodorderbyid/${value}`);
  }

  saveFoodProduct(formData: any) {
    return this.http.post(environment.apiUrl + "foodproduct/save",
      formData);
  }

  //ITEM SERVICES END


  //EDIT ORDER SERVICE START

  getAllFoodOrder(id: number) {
    return this.http.get(`${environment.apiUrl}foodorder/getall?userid=${id}`);
  }

  updateStatus(foodOrder:any){
    return this.http.put("http://localhost:8080/foodorder",foodOrder)
  }

  makeFoodOrder(id:any, order:any) {
    return this.http.post(environment.apiUrl + "foodorder/order?staffId=" + id, order);
  }

}