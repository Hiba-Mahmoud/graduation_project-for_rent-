import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProperityComponent } from './add-properity.component';

describe('AddProperityComponent', () => {
  let component: AddProperityComponent;
  let fixture: ComponentFixture<AddProperityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProperityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProperityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
