import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TransactionsDashBoardComponent } from './transactions-dash-board/transactions-dash-board.component';
import { TransactionsComponent } from './transactions/transactions.component';


// mat imports
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DailogForUserNumberComponent } from './dailog-for-user-number/dailog-for-user-number.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { UseratncardComponent } from './useratncard/useratncard.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsrlayoutComponent } from './usrlayout/usrlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { BankTransactionsComponent } from './bank-transactions/bank-transactions.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { NgChartsModule } from 'ng2-charts';
import { PagenotfondComponent } from './dialogs/pagenotfond/pagenotfond.component';
import { NotransactionsComponent } from './dialogs/notransactions/notransactions.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsDashBoardComponent,
    TransactionsComponent,
    DailogForUserNumberComponent,
    UseratncardComponent,
    UsrlayoutComponent,
    BankTransactionsComponent,
    PagenotfondComponent,
    NotransactionsComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
