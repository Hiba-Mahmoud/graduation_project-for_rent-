import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfavouritesComponent } from './userfavourites.component';

describe('UserfavouritesComponent', () => {
  let component: UserfavouritesComponent;
  let fixture: ComponentFixture<UserfavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
