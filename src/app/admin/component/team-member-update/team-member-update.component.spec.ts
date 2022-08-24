import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberUpdateComponent } from './team-member-update.component';

describe('TeamMemberUpdateComponent', () => {
  let component: TeamMemberUpdateComponent;
  let fixture: ComponentFixture<TeamMemberUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
