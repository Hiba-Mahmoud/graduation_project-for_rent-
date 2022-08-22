import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfavouritsComponent } from './userfavourits.component';

describe('UserfavouritsComponent', () => {
  let component: UserfavouritsComponent;
  let fixture: ComponentFixture<UserfavouritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfavouritsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfavouritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
