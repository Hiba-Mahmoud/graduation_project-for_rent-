import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRentedYetComponent } from './not-rented-yet.component';

describe('NotRentedYetComponent', () => {
  let component: NotRentedYetComponent;
  let fixture: ComponentFixture<NotRentedYetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotRentedYetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotRentedYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
