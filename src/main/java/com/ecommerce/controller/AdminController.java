package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.model.User;
import com.ecommerce.service.LoginService;

@Controller
public class AdminController {
	
	@Autowired
	private LoginService service;

	@PostMapping("/process_AddCustomer")
	public String RegisterNewUser(@ModelAttribute User user) {
		if (service.registerValidate(user)) {
			System.out.println("CUSTOMER : " + user + "\n<------------- CUSTOMER ADDED SUCCESS ------------>\n");
			service.save(user);
			return "redirect:/adminCustomers";
		} else {
			System.out.println("<------------- CUSTOMER ADDED FAILED ------------>\n");
			return "redirect:/adimnAddCustomers";
		}

	}
	
}
