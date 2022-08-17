import { Component, NgIterable, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../services/dialog.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  constructor(private api: ApiService, private dialogs: DialogService) { }
  data= new Array<td>();
  displays!: boolean;
  allAcc!: any;
  savingsAcc!: any;
  salaryAcc!: any;
  currentAcc!: any;
  overdraftAcc!: any;
  // bar charts for transactions
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['cash '],
    datasets: [
      { data: [65], label: 'inflow' },
      { data: [28], label: 'outflow' },
    ],
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  // pie chart

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['salary', 'savings', 'current', 'overdraft'];
  public pieChartDatasets = [
    {
      data: [300, 500, 100, 200],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit(): void {
    this.api.getBankTransactions().subscribe({
      next: (res) => {
        if (Object.keys(res).length == 0) {
          // 0 transactions
          this.displays = false;
          // this.dialogs.openNoTransactions();
          this.dialogs.openNoTransactions();
        } else {
          console.log(typeof(this.data));
          this.data =res;

          console.log(typeof(this.data));

          this.displays = true;
        }
      },
      error: () => {
        // 404 error
        this.dialogs.opnenFileNotFound();
      },
    });
    
  };




  // filter
  userIn!: any;
  filterValue = '';
  c(event: any) {
    if (event.value == 'all') {
      console.log('all');
    }
  }
}
export interface td {
  "date": string,
  "from": string,
  "fromAccNo": number,
  "fromBankName": string,
  "fromIfc": string,
  "fromAccType": string,
  "transactionId": number,
  "to": string,
  "toAccNo": number,
  "toBankName": string,
  "toIfc": string,
  "toAccType": string,
  "amount": number

} 
