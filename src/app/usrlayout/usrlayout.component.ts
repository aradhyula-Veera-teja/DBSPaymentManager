import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../services/api.service';


import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-usrlayout',
  templateUrl: './usrlayout.component.html',
  styleUrls: ['./usrlayout.component.css']
})
export class UsrlayoutComponent implements OnInit {
  displayedColumns: string[] = ['reciverName','transactionId','bankAccount', 'bankAccountNumber','ifcCode','amount'];
  dataSource!: MatTableDataSource<any>;
  userIn!:string;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  getUserTransactions(x:string){
    this.api.getuser(x)
    .subscribe({
      next:(res)=>{
        // console.log(res);
      }
    })
  }
  getTransactions()
  {
    this.api.getTransactions()
    .subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.paginator=this.paginator;
        this.sort=this.sort;
      },
      error:(err)=>{
        console.log("sorry");
      }
    })
  };

  // filter

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
