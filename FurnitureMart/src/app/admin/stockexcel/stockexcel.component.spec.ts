import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexcelComponent } from './stockexcel.component';

describe('StockexcelComponent', () => {
  let component: StockexcelComponent;
  let fixture: ComponentFixture<StockexcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockexcelComponent]
    });
    fixture = TestBed.createComponent(StockexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
