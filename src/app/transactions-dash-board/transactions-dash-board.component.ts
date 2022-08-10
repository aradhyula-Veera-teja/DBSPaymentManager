import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DailogForUserNumberComponent } from '../dailog-for-user-number/dailog-for-user-number.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-transactions-dash-board',
  templateUrl: './transactions-dash-board.component.html',
  styleUrls: ['./transactions-dash-board.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TransactionsDashBoardComponent implements OnInit {
  transactionPageSelector=0;

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['To', 'Transaction Id', 'Date', 'Amount'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null | undefined;


  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DailogForUserNumberComponent);
  }

}
export interface PeriodicElement {
  to:string;
  transactionId:number;
  date:string;
  amount:number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    to:"teja",
    transactionId:123,
    date:"01-01-2001",
    amount:45
  }
];