import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedAdsComponent } from './accepted-ads.component';

describe('AcceptedAdsComponent', () => {
  let component: AcceptedAdsComponent;
  let fixture: ComponentFixture<AcceptedAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
