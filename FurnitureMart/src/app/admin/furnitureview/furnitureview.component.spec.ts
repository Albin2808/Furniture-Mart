import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureviewComponent } from './furnitureview.component';

describe('FurnitureviewComponent', () => {
  let component: FurnitureviewComponent;
  let fixture: ComponentFixture<FurnitureviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnitureviewComponent]
    });
    fixture = TestBed.createComponent(FurnitureviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
