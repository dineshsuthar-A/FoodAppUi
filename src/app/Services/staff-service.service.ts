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
}
