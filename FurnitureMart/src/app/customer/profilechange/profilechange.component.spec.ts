import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilechangeComponent } from './profilechange.component';

describe('ProfilechangeComponent', () => {
  let component: ProfilechangeComponent;
  let fixture: ComponentFixture<ProfilechangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilechangeComponent]
    });
    fixture = TestBed.createComponent(ProfilechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
