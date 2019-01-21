import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateCartService {

  public API: string = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }
  newCart(customerId: any, cart: Cart){
    return this.http.post(this.API + '/' + customerId + '/newCart', cart);
  }
}
