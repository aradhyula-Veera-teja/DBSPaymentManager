import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseratncardComponent } from './useratncard.component';

describe('UseratncardComponent', () => {
  let component: UseratncardComponent;
  let fixture: ComponentFixture<UseratncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseratncardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseratncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
