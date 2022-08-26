import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPolictyAddComponent } from './about-policty-add.component';

describe('AboutPolictyAddComponent', () => {
  let component: AboutPolictyAddComponent;
  let fixture: ComponentFixture<AboutPolictyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPolictyAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPolictyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
