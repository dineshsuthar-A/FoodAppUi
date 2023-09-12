import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductComponent } from './food-product.component';

describe('FoodProductComponent', () => {
  let component: FoodProductComponent;
  let fixture: ComponentFixture<FoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
