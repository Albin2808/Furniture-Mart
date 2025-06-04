import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituredetailsComponent } from './furnituredetails.component';

describe('FurnituredetailsComponent', () => {
  let component: FurnituredetailsComponent;
  let fixture: ComponentFixture<FurnituredetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnituredetailsComponent]
    });
    fixture = TestBed.createComponent(FurnituredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
