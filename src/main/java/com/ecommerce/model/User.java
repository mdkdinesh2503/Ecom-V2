package com.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "register_details")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, unique = true, length = 255)
	private String mobile;

	@Column(nullable = false, unique = true, length = 255)
	private String email;
	
	@Column(nullable = false, length = 64)
	private String password;

	public User() { }

	public User(String mobile, String email, String password) {
		this.mobile = mobile;
		this.email = email;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", mobile=" + mobile + ", email=" + email + ", password=" + password
				+ "]";
	}

}
