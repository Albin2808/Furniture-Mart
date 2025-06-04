import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationeditComponent } from './locationedit.component';

describe('LocationeditComponent', () => {
  let component: LocationeditComponent;
  let fixture: ComponentFixture<LocationeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationeditComponent]
    });
    fixture = TestBed.createComponent(LocationeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
