import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  public API: string = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getReceipt(): Observable<any> {
    return this.http.get('//localhost:8080/receipt');
  }

  getEmployee(empId:any): Observable<any> {
    // return this.http.get('//localhost:8080/employee');
    return this.http.get(this.API + '/employee/' + empId);
  }

  getBranch(): Observable<any> {
    return this.http.get('//localhost:8080/branch');
  }

  getCart(cartId:any): Observable<any> {
    // return this.http.get('//localhost:8080/cart');
    return this.http.get(this.API + '/cart/' + cartId);

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
  cartId: any;
}
