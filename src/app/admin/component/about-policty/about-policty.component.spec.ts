import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPolictyComponent } from './about-policty.component';

describe('AboutPolictyComponent', () => {
  let component: AboutPolictyComponent;
  let fixture: ComponentFixture<AboutPolictyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPolictyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPolictyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
