import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureregComponent } from './furniturereg.component';

describe('FurnitureregComponent', () => {
  let component: FurnitureregComponent;
  let fixture: ComponentFixture<FurnitureregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnitureregComponent]
    });
    fixture = TestBed.createComponent(FurnitureregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
