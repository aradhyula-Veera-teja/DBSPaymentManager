import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bank-transactions',
  templateUrl: './bank-transactions.component.html',
  styleUrls: ['./bank-transactions.component.css'],
})
export class BankTransactionsComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'transactionId',
    'from',
    'fromBankName',
    'fromAccNo',
    'fromIfc',
    'fromAccType',
    'to',
    'toBankName',
    'toAccNo',
    'toIfc',
    'toAccType',
    'amount'
  ];
  dataSource!: MatTableDataSource<any>;
  userIn!: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: ApiService) {}

  //  fetching data
  ngOnInit(): void {
    this.api.getBankTransactions().subscribe({
      next: (res) => {
        
        this.dataSource = new MatTableDataSource(res);
        console.log(res);
        console.log(res.length);
        this.paginator = this.paginator;
        this.sort = this.sort;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  // filter 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
