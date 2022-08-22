import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejecteddAdsComponent } from './rejectedd-ads.component';

describe('RejecteddAdsComponent', () => {
  let component: RejecteddAdsComponent;
  let fixture: ComponentFixture<RejecteddAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejecteddAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejecteddAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
