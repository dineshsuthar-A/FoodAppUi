import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerServicesService {

  constructor(private http: HttpClient) { }

  getStaffInfo() {
    return this.http.get(environment.apiUrl + "user/staff/findAll");
  }

  deleteStaff(id:any) {
    return this.http.delete(environment.apiUrl+"user/userid/"+id);
  }

  registerStaff(formData : any) {
    return this.http.post(environment.apiUrl + "user/save", {
      "name": formData?.name,
      "email": formData?.email,
      "role": "Staff",
      "password": formData?.password
    });
    
  }
  updateStaff(id: any, formData: any) {
    return this.http.put(environment.apiUrl + "user/update?userId=" + id, formData);
  }
  deleteFoodProduct(id: any) {
    return this.http.delete(environment.apiUrl + "foodproduct/product/" + id);
  }
  updateProduct(id:any, formData:any) {
    return this.http.put(environment.apiUrl + "foodproduct/update?foodId="+id,
      formData);
  }

  getFoodProducts() {
    return this.http.get(environment.apiUrl + "foodproduct/getall");
  }

  saveFoodProduct(formData: any) {
    return this.http.post(environment.apiUrl + "foodproduct/save",
      formData);
  }

  getStaff(id:any) {
    return this.http.get(environment.apiUrl + "user/find?userId=" + id);
  }

  getProduct(id: any) {
    return this.http.get(environment.apiUrl + "/foodproduct/find?foodId=" + id);
  }
}
