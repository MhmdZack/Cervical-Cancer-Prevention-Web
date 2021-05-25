import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScreencenterComponent } from './create-screencenter.component';

describe('CreateScreencenterComponent', () => {
  let component: CreateScreencenterComponent;
  let fixture: ComponentFixture<CreateScreencenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScreencenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScreencenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
