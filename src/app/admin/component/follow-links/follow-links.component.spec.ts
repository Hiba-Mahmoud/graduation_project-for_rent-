import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowLinksComponent } from './follow-links.component';

describe('FollowLinksComponent', () => {
  let component: FollowLinksComponent;
  let fixture: ComponentFixture<FollowLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
