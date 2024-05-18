package com.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.model.*;

public interface AdminRepository extends JpaRepository<Admin, Long>{

}
