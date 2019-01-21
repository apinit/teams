import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FindCustomerService {
  public API: string = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  findCustomer(customerId: any): Observable<any>{
    // console.log(customerId);
    // return this.http.get(this.API + `{/findCustomer/${customerId}}`);
    return this.http.get(this.API + '/findCustomer/' + customerId);
  }
}
