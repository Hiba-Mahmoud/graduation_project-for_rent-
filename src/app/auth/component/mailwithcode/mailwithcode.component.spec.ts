import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailwithcodeComponent } from './mailwithcode.component';

describe('MailwithcodeComponent', () => {
  let component: MailwithcodeComponent;
  let fixture: ComponentFixture<MailwithcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailwithcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailwithcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
