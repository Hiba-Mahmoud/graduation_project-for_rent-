import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedUsersTableComponent } from './blocked-users-table.component';

describe('BlockedUsersTableComponent', () => {
  let component: BlockedUsersTableComponent;
  let fixture: ComponentFixture<BlockedUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedUsersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
