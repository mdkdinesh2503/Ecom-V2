package com.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = false, length = 255)
	private String title;

	@Column(nullable = false, unique = false, length = 255)
	private String description;

	@Column(nullable = false, unique = false, length = 255)
	private int price;

	@Column(nullable = false, unique = false, length = 255)
	private String category;

	@Column(nullable = false, unique = false, length = 255)
	private String image;
	
	@Column(unique = false, length = 255)
	private int discount;
	
	@Column(nullable = false, unique = false, length = 255)
	private int rate;
	
	@Column(nullable = false, unique = false, length = 255)
	private int count;

	public Product() {}

	public Product(Long id, String title, String description, int price, String category, String image, int discount,
			int rate, int count) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.category = category;
		this.image = image;
		this.discount = discount;
		this.rate = rate;
		this.count = count;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", description=" + description + ", price=" + price
				+ ", category=" + category + ", image=" + image + ", discount=" + discount + ", rate=" + rate
				+ ", count=" + count + "]";
	}
	
}
