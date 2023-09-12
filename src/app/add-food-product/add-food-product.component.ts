import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerServicesService } from '../Services/manager-services.service';

@Component({
  selector: 'app-add-food-product',
  templateUrl: './add-food-product.component.html',
  styleUrls: ['./add-food-product.component.css']
})
export class AddFoodProductComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private service:ManagerServicesService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      about: ['', Validators.required],
      availability: [false],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // You can access the form values using this.registrationForm.value
      // Perform actions such as sending data to an API
      const formData = this.registrationForm.value;
      this.service.saveFoodProduct(formData).subscribe((res: any) => {
        alert("Added Successfully");
        this.registrationForm.reset();
      }, err => {
        alert("Server error");
      })

    } else {
      // Form is invalid; handle validation errors
    }
  }
}
