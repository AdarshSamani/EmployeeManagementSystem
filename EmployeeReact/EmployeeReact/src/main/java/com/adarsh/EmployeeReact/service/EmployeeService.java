package com.adarsh.EmployeeReact.service;

import com.adarsh.EmployeeReact.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface EmployeeService {
    void addEmployee(Employee employee);
    Optional<Employee> viewEmployee(int id);
    List<Employee> viewAllEmployees();
    void updateEmployee(int id, Employee employee);
    void deleteEmployee(int id);
}
