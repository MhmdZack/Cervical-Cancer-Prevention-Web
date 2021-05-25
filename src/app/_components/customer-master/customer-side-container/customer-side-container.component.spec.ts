import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSideContainerComponent } from './customer-side-container.component';

describe('CustomerSideContainerComponent', () => {
  let component: CustomerSideContainerComponent;
  let fixture: ComponentFixture<CustomerSideContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSideContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSideContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
