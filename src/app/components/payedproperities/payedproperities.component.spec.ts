import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayedproperitiesComponent } from './payedproperities.component';

describe('PayedproperitiesComponent', () => {
  let component: PayedproperitiesComponent;
  let fixture: ComponentFixture<PayedproperitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayedproperitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayedproperitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
