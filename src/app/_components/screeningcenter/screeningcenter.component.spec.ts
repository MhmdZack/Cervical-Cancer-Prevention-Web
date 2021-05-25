import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningcenterComponent } from './screeningcenter.component';

describe('ScreeningcenterComponent', () => {
  let component: ScreeningcenterComponent;
  let fixture: ComponentFixture<ScreeningcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
