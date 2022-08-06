import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersonaldataComponent } from './editpersonaldata.component';

describe('EditpersonaldataComponent', () => {
  let component: EditpersonaldataComponent;
  let fixture: ComponentFixture<EditpersonaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpersonaldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpersonaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
