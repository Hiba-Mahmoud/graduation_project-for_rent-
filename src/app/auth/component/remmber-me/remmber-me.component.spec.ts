import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemmberMeComponent } from './remmber-me.component';

describe('RemmberMeComponent', () => {
  let component: RemmberMeComponent;
  let fixture: ComponentFixture<RemmberMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemmberMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemmberMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
