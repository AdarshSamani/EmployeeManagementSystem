package com.adarsh.EmployeeReact.service.implementation;

import com.adarsh.EmployeeReact.model.Employee;
import com.adarsh.EmployeeReact.repository.EmployeeRepo;
import com.adarsh.EmployeeReact.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImp implements EmployeeService {

    @Autowired
    private EmployeeRepo repo;

    @Override
    public void addEmployee(Employee employee) {
        repo.save(employee);
    }

    @Override
    public Optional<Employee> viewEmployee(int id) {
        return repo.findById(id);
    }

    @Override
    public List<Employee> viewAllEmployees() {
        List<Employee> employees = repo.findAll();
        return employees;
    }

    @Override
    public void updateEmployee(int id, Employee employee) {
        Optional<Employee> employeeNew = repo.findById(id);
        employeeNew.get().setFirstName(employee.getFirstName());
        employeeNew.get().setLastName(employee.getLastName());
        employeeNew.get().setEmail(employee.getEmail());
        repo.save(employeeNew.orElse(null));
    }

    @Override
    public void deleteEmployee(int id) {
        repo.deleteById(id);
    }
}
