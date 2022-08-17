import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { 
  }

  getBankTransactions(){
    return this.http.get<any>("http://localhost:3000/bankTransactions/");
  }
  user!:any;

  getuser(x:string){
    // this.user=this.http.get<any>("http://localhost:3000/usersList/"+x);
    this.user={
      cardType:'dbs debit',
      accountNumber:1234432112344321,
      valid:'6/27',
      accName:'veera Teja',
      accountType:'savings',
      balance:900000,
      cvv:999
    }
    return this.http.get<any>("http://localhost:3000/usersList/");
  }
  getTransactions(){
    return this.http.get<any>("http://localhost:3000/transactions/");
  }
}
