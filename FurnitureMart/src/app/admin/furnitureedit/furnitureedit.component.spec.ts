import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureeditComponent } from './furnitureedit.component';

describe('FurnitureeditComponent', () => {
  let component: FurnitureeditComponent;
  let fixture: ComponentFixture<FurnitureeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnitureeditComponent]
    });
    fixture = TestBed.createComponent(FurnitureeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
