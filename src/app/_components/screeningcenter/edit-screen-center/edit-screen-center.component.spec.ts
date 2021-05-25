import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScreenCenterComponent } from './edit-screen-center.component';

describe('EditScreenCenterComponent', () => {
  let component: EditScreenCenterComponent;
  let fixture: ComponentFixture<EditScreenCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScreenCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScreenCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
