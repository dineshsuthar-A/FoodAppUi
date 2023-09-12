import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ManagerServicesService } from '../Services/manager-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

 
  registrationForm: FormGroup;


  constructor(private fb: FormBuilder, private service : ManagerServicesService, private route:Router, private url:ActivatedRoute) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  ngOnInit(): void {
      
    this.url.paramMap.subscribe((params) => {
    const id = params.get('id');
    
      if (id) {
        this.service.getStaff(id).subscribe((res:any) => {
          console.log(res);
          this.registrationForm = this.fb.group({
          name: [res?.data?.name, Validators.required], // Set a default value for 'name'
          email: [res?.data?.email, [Validators.required, Validators.email]], // Set a default value for 'email'
          password: [res?.data?.password, [Validators.required, Validators.minLength(6)]], // Set a default value for 'password'
          cpassword: [res?.data?.password, [Validators.required, Validators.minLength(6)]] // Set a default value for 'cpassword'
        });
        }, err => {
          console.log(err);
          alert("Server error");
        })
      } 
  });


  }
  

  logout(): void{
    localStorage.removeItem("user");
    this.route.navigate(['/'])
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm?.value;
      this.service.registerStaff(formData).subscribe(res => {
        alert("Staff Member created");
        this.registrationForm.reset();
      }, err => {
        alert("Server Error");
      })
    } else {
      // Form is invalid, do not submit and show error messages
      alert('Please correct the form errors');
    }
  }

}
