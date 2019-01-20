package sut.se.team11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sut.se.team11.entity.Employee;
import sut.se.team11.repository.EmployeeRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")


public class EmployeeController {
    @Autowired
    public EmployeeRepository employeeRepository ;

    @GetMapping("/Employee")
    public List<Employee> Employee(){
        return employeeRepository.findAll().stream().collect(Collectors.toList());
    }
}