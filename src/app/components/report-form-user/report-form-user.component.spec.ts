import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFormUserComponent } from './report-form-user.component';

describe('ReportFormUserComponent', () => {
  let component: ReportFormUserComponent;
  let fixture: ComponentFixture<ReportFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFormUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
