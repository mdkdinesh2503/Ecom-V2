package com.ecommerce.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.model.*;
import com.ecommerce.repositories.*;

@Service
public class LoginService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private AdminRepository adminRepo;
	
	public List<Admin> listAll() {
		return adminRepo.findAll();
	}
	
	public User get(String email) {
		return userRepo.findByEmail(email).get();
	}

	public User save(User user) {
		if (user == null) {
			return null;
		} else {
			return userRepo.save(user);
		}
	}

	public User authenticate(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password).orElse(null);
	}
}

