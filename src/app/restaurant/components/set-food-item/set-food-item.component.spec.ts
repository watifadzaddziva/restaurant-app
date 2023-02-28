import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFoodItemComponent } from './set-food-item.component';

describe('SetFoodItemComponent', () => {
  let component: SetFoodItemComponent;
  let fixture: ComponentFixture<SetFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetFoodItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
