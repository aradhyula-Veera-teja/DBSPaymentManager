import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrlayoutComponent } from './usrlayout.component';

describe('UsrlayoutComponent', () => {
  let component: UsrlayoutComponent;
  let fixture: ComponentFixture<UsrlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsrlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
