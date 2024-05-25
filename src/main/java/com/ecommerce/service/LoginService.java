package com.ecommerce.service;

import java.util.regex.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.model.*;
import com.ecommerce.repositories.*;

interface regex {
	String mobileRegex = "^[6-9]{1}[0-9]{9}$";
	String emailRegex = "^[0-9a-z]+[._]{0,1}[0-9a-z]+[@][a-z]+[.][a-z]{2,3}([.][a-z]{2,3}){0,1}$";
	String passwordRegex = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{6,12}$";
}

@Service
public class LoginService implements regex {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private AdminRepository adminRepo;
	
	public User getUser(String email) {
		return userRepo.findByEmail(email).get();
	}
	
	public Admin getAdmin(String email) {
		return adminRepo.findByEmail(email).get();
	}
	
	public Admin getAdminDetails(String email, String password) {
		return adminRepo.findByEmailAndPassword(email, password).orElse(null);
	}
	
	public User getExistEmail(String email) {
		return userRepo.findByEmail(email).orElse(null);
	}
	
	public User getExistMobile(String mobile) {
		return userRepo.findByMobile(mobile).orElse(null);
	}

	public User emailAuthenticate(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password).orElse(null);
	}

	public User mobileAuthenticate(String mobile, String password) {
		return userRepo.findByMobileAndPassword(mobile, password).orElse(null);
	}

	public User save(User user) {
		if (user == null) {
			return null;
		} else {
			return userRepo.save(user);
		}
	}
	
//	Login Details
	public String loginValidate(Login login) {
		String username = login.getUsername();
		String password = login.getPassword();
		System.out.println("Email & Pass : " + emailAuthenticate(username, password));
		System.out.println("Mobile & Pass : " + mobileAuthenticate(username, password));
		System.out.println("Admin : " + getAdminDetails(username, password));
		if(emailAuthenticate(username, password) != null || mobileAuthenticate(username, password) != null) {
			return "redirect:/user";
		} else if (getAdminDetails(username, password) != null) {
			return "redirect:/admin";
		} else {
			return "redirect:/login";
		}
	}
	

//	Register Details
	public boolean registerValidate(User user) {
		boolean mobileValue = isValidCheck(user.getMobile(), mobileRegex, "mobile");
		boolean emailValue = isValidCheck(user.getEmail(), emailRegex, "email");
		boolean passwordValue = isValidCheck(user.getPassword(), passwordRegex, "password");

		return (mobileValue && emailValue && passwordValue);
	}

	boolean isValidCheck(String value, String regex, String field) {
		Pattern pattern = Pattern.compile(regex);
		if (value.isEmpty() || !pattern.matcher(value).matches()) {
			System.out.println(field + " - pattern not match");
			return false;
		} else if (value.equalsIgnoreCase("admin@gmail.com") && field.equals("email")) {
			System.out.println("Admin not allowed");
			return false;
		} else if ((field.equals("mobile") && getExistMobile(value) != null) || (field.equals("email") && getExistEmail(value) != null)) {
			System.out.println(field + " already exist");
			return false;
		} else {
			System.out.println(field + " - success");
			return true;
		}
	}
}
