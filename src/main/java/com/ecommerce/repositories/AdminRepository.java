package com.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.model.*;
import java.util.*;


public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	Optional<Admin> findByEmailAndPassword(String email, String password);
	
	Optional<Admin> findByEmail(String email);

}
