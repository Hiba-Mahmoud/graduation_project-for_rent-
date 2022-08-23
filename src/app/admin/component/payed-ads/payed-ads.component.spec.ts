import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayedAdsComponent } from './payed-ads.component';

describe('PayedAdsComponent', () => {
  let component: PayedAdsComponent;
  let fixture: ComponentFixture<PayedAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayedAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
