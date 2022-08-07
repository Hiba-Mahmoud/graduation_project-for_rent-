import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverRequestsComponent } from './adver-requests.component';

describe('AdverRequestsComponent', () => {
  let component: AdverRequestsComponent;
  let fixture: ComponentFixture<AdverRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdverRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
