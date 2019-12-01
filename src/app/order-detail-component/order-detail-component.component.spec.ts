import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailComponentComponent } from './order-detail-component.component';

describe('OrderDetailComponentComponent', () => {
  let component: OrderDetailComponentComponent;
  let fixture: ComponentFixture<OrderDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
