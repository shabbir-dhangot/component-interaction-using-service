import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemsComponentComponent } from './order-items-component.component';

describe('OrderItemsComponentComponent', () => {
  let component: OrderItemsComponentComponent;
  let fixture: ComponentFixture<OrderItemsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
