import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatRadioModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { FindCustomerComponent } from './components/find-customer/find-customer.component';

import { FindCustomerService } from './shared/find-customer/find-customer.service';
import { FindEmployeeService } from './shared/find-employee/find-employee.service';
import { CreateCartService } from './shared/create-cart/create-cart.service';
import { CreateCartComponent } from './components/create-cart/create-cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FindEmployeeComponent } from './components/find-employee/find-employee.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

const routes: Routes = [
  {path: '', redirectTo: '/find-customer', pathMatch: 'full'},
  {path: 'find-customer', component: FindCustomerComponent},
  // {path: '', redirectTo: '/find-employee', pathMatch: 'full'},
  {path: 'find-employee', component: FindEmployeeComponent},
  {path: ':id/newCart', component: CreateCartComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'receipt', component: ReceiptComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    FindCustomerComponent,
    FindEmployeeComponent,
    CreateCartComponent,
    CustomerComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [
    FindCustomerService,
    FindEmployeeService,
    CreateCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
