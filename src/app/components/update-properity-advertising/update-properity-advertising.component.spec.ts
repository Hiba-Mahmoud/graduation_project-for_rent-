import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProperityAdvertisingComponent } from './update-properity-advertising.component';

describe('UpdateProperityAdvertisingComponent', () => {
  let component: UpdateProperityAdvertisingComponent;
  let fixture: ComponentFixture<UpdateProperityAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProperityAdvertisingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProperityAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
