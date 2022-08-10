import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDashBoardComponent } from './transactions-dash-board.component';

describe('TransactionsDashBoardComponent', () => {
  let component: TransactionsDashBoardComponent;
  let fixture: ComponentFixture<TransactionsDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
