import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritsComponent } from './favourits.component';

describe('FavouritsComponent', () => {
  let component: FavouritsComponent;
  let fixture: ComponentFixture<FavouritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
