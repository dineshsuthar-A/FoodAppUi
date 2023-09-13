import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerServicesService } from '../Services/manager-services.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-food-product',
  templateUrl: './add-food-product.component.html',
  styleUrls: ['./add-food-product.component.css']
})
export class AddFoodProductComponent implements OnInit {

  registrationForm: FormGroup;
  Type: string
  constructor(private fb: FormBuilder, private service: ManagerServicesService, private route: Router, private url: ActivatedRoute) {
    this.Type = "Save";
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      about: ['', Validators.required],
      availability: [false],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  ngOnInit() {
    this.url.paramMap.subscribe((params) => {
    const id = params.get('id');
    
      if (id) {
        this.Type = "Update"
        this.service.getProduct(id).subscribe((res:any) => {
          
          this.registrationForm = this.fb.group({
            name: [res?.data?.name, Validators.required],
            type: [res?.data?.type, Validators.required],
            about: [res?.data?.about, Validators.required],
            availability: [res?.data?.availability],
            price: [res?.data?.price, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
          });
        }, err => {
          console.log(err);
          alert("Server error");
        })
      } 
  });
  }

  onSubmit() {




    if (this.registrationForm.valid) {
      // You can access the form values using this.registrationForm.value
      // Perform actions such as sending data to an API
      const formData = this.registrationForm.value;

      if (this.Type == "Update") {
        this.service.updateProduct(this.url.snapshot.paramMap.get('id'), formData).subscribe((res: any) => {
          alert("Updated");
        }, (error: any) => {
          alert("Server Error");
        })
      } else {
        this.service.saveFoodProduct(formData).subscribe((res: any) => {
        alert("Added Successfully");
        this.registrationForm.reset();
      }, err => {
        alert("Server error");
      });
      }


      

    } else {
      // Form is invalid; handle validation errors
    }
  }
}
