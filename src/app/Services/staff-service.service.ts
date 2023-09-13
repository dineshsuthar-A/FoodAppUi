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

getAllFoodOrder(value: number) {
  return this.http.get(`http://localhost:8080/foodorder/${value}`);
}

updateStatus(foodOrder:any){
  return this.http.put("http://localhost:8080/foodorder",foodOrder)
}

//EDIT ORDER SERVICE END
}