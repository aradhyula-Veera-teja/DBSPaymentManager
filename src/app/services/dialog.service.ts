import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NotransactionsComponent } from '../dialogs/notransactions/notransactions.component';
import { PagenotfondComponent } from '../dialogs/pagenotfond/pagenotfond.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog:MatDialog) { }

  opnenFileNotFound(){
    this.dialog.open(PagenotfondComponent);
  }
  openNoTransactions(){
    this.dialog.open(NotransactionsComponent);
  }
}
