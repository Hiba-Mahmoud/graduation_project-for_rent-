import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpayedRentedAdsComponent } from './userpayed-rented-ads.component';

describe('UserpayedRentedAdsComponent', () => {
  let component: UserpayedRentedAdsComponent;
  let fixture: ComponentFixture<UserpayedRentedAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpayedRentedAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpayedRentedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
