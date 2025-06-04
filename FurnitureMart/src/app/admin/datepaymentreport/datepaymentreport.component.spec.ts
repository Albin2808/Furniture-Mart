import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepaymentreportComponent } from './datepaymentreport.component';

describe('DatepaymentreportComponent', () => {
  let component: DatepaymentreportComponent;
  let fixture: ComponentFixture<DatepaymentreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepaymentreportComponent]
    });
    fixture = TestBed.createComponent(DatepaymentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
