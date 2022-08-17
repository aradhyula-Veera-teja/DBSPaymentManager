import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../services/api.service';

import { ChartConfiguration } from 'chart.js';
import { ChartOptions } from 'chart.js';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { DialogService } from '../services/dialog.service';
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
  t: any;
  constructor(private api:ApiService,private dialogs:DialogService) { }
  displays!:boolean;
  ngOnInit(): void {
    this.displays=false;
    this.getTransactions();
  }
  getUserTransactions(x:string){
    this.api.getuser(x)
    .subscribe({
      next:(res)=>{
        this.displays=true;
        // console.log(res);
      },
      error:(err)=>{
        // no user
        this.dialogs.opnenFileNotFound();
      }
    })
  }
  getTransactions()
  {
    this.api.getTransactions()
    .subscribe({
      next:(res)=>{
        // this.t = res;
        this.dataSource=new MatTableDataSource(res);
        this.paginator=this.paginator;
        this.sort=this.sort;
        // console.log(this.dataSource);
      },
      error:(err)=>{
        console.log("sorry");
      }
    })
  };
  //chart 
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['transactions '],
    datasets: [
      { data: [30], label: 'inflow' },
      
    ],
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
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
