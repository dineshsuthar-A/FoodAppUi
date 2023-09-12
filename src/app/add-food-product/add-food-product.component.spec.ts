import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodProductComponent } from './add-food-product.component';

describe('AddFoodProductComponent', () => {
  let component: AddFoodProductComponent;
  let fixture: ComponentFixture<AddFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
