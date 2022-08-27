import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPayedAdsforOwnerComponent } from './edit-payed-adsfor-owner.component';

describe('EditPayedAdsforOwnerComponent', () => {
  let component: EditPayedAdsforOwnerComponent;
  let fixture: ComponentFixture<EditPayedAdsforOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPayedAdsforOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPayedAdsforOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
