import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowLinksUpdateComponent } from './follow-links-update.component';

describe('FollowLinksUpdateComponent', () => {
  let component: FollowLinksUpdateComponent;
  let fixture: ComponentFixture<FollowLinksUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowLinksUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowLinksUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
