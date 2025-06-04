import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieReportComponent } from './pie-report.component';

describe('PieReportComponent', () => {
  let component: PieReportComponent;
  let fixture: ComponentFixture<PieReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieReportComponent]
    });
    fixture = TestBed.createComponent(PieReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
