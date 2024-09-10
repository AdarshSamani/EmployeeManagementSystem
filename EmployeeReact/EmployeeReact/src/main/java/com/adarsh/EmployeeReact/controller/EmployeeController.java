package com.adarsh.EmployeeReact.controller;

import com.adarsh.EmployeeReact.model.Employee;
import com.adarsh.EmployeeReact.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping("employees")
    public Optional<Employee> addEmployee(@RequestBody Employee employee){
        service.addEmployee(employee);
        return service.viewEmployee(employee.getId());
    }

    @GetMapping("employees/{id}")
    public Optional<Employee> viewEmployee(@PathVariable("id") int id){
        Optional<Employee> employee = service.viewEmployee(id);
        return employee;
    }

    @GetMapping("employees")
    public List<Employee> viewAllEmployees(){
        return service.viewAllEmployees();
    }

    @PutMapping("employees/{id}")
    public Optional<Employee> updateEmployee(@PathVariable("id") int id,@RequestBody Employee employee){
        service.updateEmployee(id,employee);
        return service.viewEmployee(id);
    }

    @DeleteMapping("employees/{id}")
    public Optional<Employee> deleteEmployee(@PathVariable("id") int id){
        Optional<Employee> employee = service.viewEmployee(id);
        service.deleteEmployee(id);
        return employee;
    }
}
