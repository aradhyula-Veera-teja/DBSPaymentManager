import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogForUserNumberComponent } from './dailog-for-user-number.component';

describe('DailogForUserNumberComponent', () => {
  let component: DailogForUserNumberComponent;
  let fixture: ComponentFixture<DailogForUserNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogForUserNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailogForUserNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
