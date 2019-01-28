import { TestBed, inject } from '@angular/core/testing';

import { AddEmployeeService } from './add-employee.service';

describe('AddEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEmployeeService]
    });
  });

  it('should be created', inject([AddEmployeeService], (service: AddEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
