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
	
	@GetMapping("/contact")
	public String contactPage() {
		return "contact";
	}
	
	@GetMapping("/register")
	public String getRegisterPage(Model model) {
		model.addAttribute("registerRequest", new User());
		return "register";
	}
	
	@GetMapping("/user")
	public String userDashboardPage(Model model) {
		return "userDashboard";
	}
	
	@GetMapping("/admin")
	public String adminDashboardPage(Model model) {
		return "adminDashboard";
	}

	@GetMapping("/login")
	public String getLoginPage(Model model) {
		model.addAttribute("loginRequest", new Login());
		return "login";
	}
	
	@PostMapping("/process_register")
	public String RegisterNewUser(@ModelAttribute User user) {
		if(service.registerValidate(user)) {
			System.out.println("register request : " + user);
			service.save(user);
			return "redirect:/login";
		} else {
			System.out.println("Register Process Failed");
			return "redirect:/register";
		}
		
	}

	@PostMapping("/process_login")
	public String loginUser(@ModelAttribute Login login, Model model) {
		System.out.println("login request : " + login);
		String data = service.loginValidate(login);
//		System.out.println("----" + service.getUser(login.getUsername()).getEmail());
//		System.out.println("....." + service.getAdmin(login.getUsername()).getEmail());
//		if(data.equals("redirect:/user")) {
//			model.addAttribute("userEmail", );
//		} else if(data.equals("redirect:/admin")) {
//			model.addAttribute("adminEmail", );
//		}
		return data;
	}
	
	@RequestMapping(value = { "/logout" }, method = RequestMethod.POST)
	public String logoutDo(HttpServletRequest response) {
		return "redirect:/login";
	}

}
