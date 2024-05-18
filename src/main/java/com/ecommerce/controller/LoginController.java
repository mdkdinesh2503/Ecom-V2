package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.model.*;
import com.ecommerce.service.LoginService;
import jakarta.servlet.http.HttpServletRequest;

@Controller
public class LoginController {
	
	@Autowired
	private LoginService service;
	
	@GetMapping("/")
	public String indexPage() {
		return "index";
	}
	
	@GetMapping("/register")
	public String getRegisterPage(Model model) {
		model.addAttribute("registerRequest", new User());
		return "register";
	}

	@GetMapping("/login")
	public String getLoginPage(Model model) {
		model.addAttribute("loginRequest", new User());
		return "login";
	}
	
	@PostMapping("/process_register")
	public String RegisterNewUser(@ModelAttribute User user) {
		System.out.println("register request : " + user);
		User registeredUser = service.save(user);
		return (registeredUser == null) ? "error" : "redirect:/login";
	}

	@PostMapping("/process_login")
	public String loginUser(@ModelAttribute User user,Admin admin, Model model) {
		System.out.println("login request : " + user);
//		Object arr[] = service.listAll();
//		System.out.println("Admin request : " + arr.equals();
		User authenticated = service.authenticate(user.getEmail(), user.getPassword());
		User getMobileNumber = service.get(user.getEmail());
		model.addAttribute("mobileNum", getMobileNumber.getMobile());
		if (authenticated != null) {
			return "product";
		} else {
			return "error";
		}
	}
	
	@RequestMapping(value = { "/logout" }, method = RequestMethod.POST)
	public String logoutDo(HttpServletRequest response) {
		return "redirect:/login";
	}

}
