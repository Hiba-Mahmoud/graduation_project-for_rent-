import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllOwnerProperitiesComponent } from './list-all-owner-properities.component';

describe('ListAllOwnerProperitiesComponent', () => {
  let component: ListAllOwnerProperitiesComponent;
  let fixture: ComponentFixture<ListAllOwnerProperitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllOwnerProperitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllOwnerProperitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
