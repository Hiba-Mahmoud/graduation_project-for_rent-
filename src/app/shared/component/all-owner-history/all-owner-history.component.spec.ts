import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOwnerHistoryComponent } from './all-owner-history.component';

describe('AllOwnerHistoryComponent', () => {
  let component: AllOwnerHistoryComponent;
  let fixture: ComponentFixture<AllOwnerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOwnerHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOwnerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
