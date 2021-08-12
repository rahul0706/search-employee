package com.springboot.app.controller;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.querydsl.jpa.impl.JPAQuery;
import com.springboot.app.model.Employee;
import com.springboot.app.model.QEmployee;
import com.springboot.app.repo.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository employeeRepository;
	@Autowired
	EntityManager entityManager;
	
	@GetMapping(value = "employees/search")
	public List<Employee> findEmployees(@RequestParam(value = "name", required = false) String name, 
			@RequestParam(value = "startDate", required = false)  @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate, 
			@RequestParam(value = "endDate", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) 
					throws ParseException{
		QEmployee employee = QEmployee.employee;
		JPAQuery<Employee> query = new JPAQuery<Employee>(entityManager).from(employee);
		if(name != null) {
			query.where(employee.name.containsIgnoreCase(name));
		}
		if(startDate !=null) {
			query.where(employee.startDate.eq(startDate));
		}
		if(endDate !=null) {
			query.where(employee.endDate.eq(endDate));
		}
		return query.fetch();
	}
	

	
}
