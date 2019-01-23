import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getReceipt(): Observable<any> {
    return this.http.get('//localhost:8080/receipt');
  }

  getEmployee(): Observable<any> {
    return this.http.get('//localhost:8080/employee');
  }

  getBranch(): Observable<any> {
    return this.http.get('//localhost:8080/branch');
  }

  getCart(): Observable<any> {
    return this.http.get('//localhost:8080/cart');
  }
}

export class Receipt {
  date: any;
  rid: any;
  netPrice: any;
  employee: Employee;
  branch: Branch;
  cart: Cart;
}

export class Employee {
  eId: any;
  eName: string;
  // branch: Branch;
}

export class Branch {
  bId: any;
  bname: string;
}

export class Cart {
  rId: any;
}
