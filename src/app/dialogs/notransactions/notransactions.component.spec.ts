import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotransactionsComponent } from './notransactions.component';

describe('NotransactionsComponent', () => {
  let component: NotransactionsComponent;
  let fixture: ComponentFixture<NotransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
