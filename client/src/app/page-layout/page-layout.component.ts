import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gocustomer(){
    this.router.navigate(['/customer']).then(() => {
      
    });
  }

  gofindemployee(){
    this.router.navigate(['/find-employee']).then(() => {
      
    });
  }
  
  goreceipt(){
    this.router.navigate(['/receipt']).then(() =>{

    });
  }
  addemployee(){
    this.router.navigate(['/add-employee']).then(() =>{
    
    });
  }
  saveprice(){
    this.router.navigate(['/save-price']).then(() =>{

    });
  }
  showprice(){
    this.router.navigate(['/show-price']).then(() => {

    });
  }

  
}
