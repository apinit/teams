import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { AddEmployeeService, Employee } from '../../shared/add-employee/add-employee.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 
  employee : Employee = new Employee();
  branchs : Array<any>;
  positions : Array<any>;
  educations : Array<any>;
  province : Array<any>;
  bdate : Date;
  titleSelect:String[] = ['นาย','นาง','นางสาว'];
  


  constructor( 
    private service : AddEmployeeService , private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.service.getBranch().subscribe(data => {
      this.branchs = data;
      console.log(this.branchs);
    });
    this.service.getEducation().subscribe(data => {
      this.educations = data;
      console.log(this.educations);
    });
    this.service.getPosition().subscribe(data => {
      this.positions = data;
      console.log(this.positions);

    });
    this.service.getProvince().subscribe(data => {
      this.province = data;
      console.log(this.province);
      console.log(this.titleSelect);
    });

  }
  save(){
    
    this.httpClient.post('//localhost:8080/Employee/' + this.employee.title + '/'+
    this.employee.eName + '/' + this.employee.age + '/' + this.employee.bdate + '/' + 
    this.employee.tel + '/' + this.employee.address + '/'+ this.employee.province.pid + '/' + 
    this.employee.education.edid + '/' + this.employee.branch.bid + '/' + this.employee.position.psid
    ,this.employee).subscribe(
      data => {
        console.log('Save Successful, Congratulations ', data);
        console.log(this.employee.bdate);
      },
      error => {
        console.log('!!!! Warning, Error !!!!!', error);
      }
       
    );
  }

}
