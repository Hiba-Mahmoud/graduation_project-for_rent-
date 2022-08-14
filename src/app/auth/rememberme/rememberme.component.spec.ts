import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemembermeComponent } from './rememberme.component';

describe('RemembermeComponent', () => {
  let component: RemembermeComponent;
  let fixture: ComponentFixture<RemembermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemembermeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemembermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
