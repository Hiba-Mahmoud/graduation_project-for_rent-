import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPolictyUpdateComponent } from './about-policty-update.component';

describe('AboutPolictyUpdateComponent', () => {
  let component: AboutPolictyUpdateComponent;
  let fixture: ComponentFixture<AboutPolictyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPolictyUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPolictyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
