# Shopie. — E-Commerce Web Application

A full-stack e-commerce web application built with **Spring Boot** and **MySQL**. The project provides a storefront (Shopie.), user authentication, and an admin dashboard for managing customers and content.

---

## Tech Stack

| Layer        | Technology                          |
|-------------|--------------------------------------|
| **Backend** | Java 17, Spring Boot 3.2.5           |
| **Web**     | Spring MVC, Thymeleaf                |
| **Data**    | Spring Data JPA, Hibernate, MySQL   |
| **Validation** | Bean Validation (Jakarta)       |
| **Frontend**| HTML, CSS, JavaScript, Font Awesome  |

---

## Features

### Public / Customer

- **Home** — Landing page with categories, banner, new arrivals, recommended products, and special offers
- **Products** — Product listing page
- **Contact** — Contact page
- **Login** — Sign in with **email** or **mobile number** and password
- **Register** — Sign up with mobile, email, and password (validated)
- **User dashboard** — Post-login customer area

### Authentication & Validation

- **Dual login** — Same form for user (email or mobile + password) and admin (email + password)
- **Registration rules:**
  - Mobile: Indian 10-digit (e.g. 6–9 start)
  - Email: Standard format
  - Password: 6–12 chars, at least one digit, one lowercase, one uppercase, no spaces
- **Uniqueness** — No duplicate email or mobile for users
- **Reserved email** — `admin@gmail.com` cannot be used for customer registration

### Admin

- **Admin dashboard** — Overview with sidebar (Customers, Categories, Products, Orders, Payments, Reviews, Settings)
- **Add customer** — Create new customers via `/process_AddCustomer` (same validation as registration)
- **Admin UI templates** for: Customers, Categories, Products, Orders, Payments, Reviews, Settings (view/add/edit screens). Backend controllers and routes for some of these are not implemented yet; the UI is in place for future development.

---

## Project Structure

```
Ecom-V2/
├── src/main/java/com/ecommerce/
│   ├── EcommerceApplication.java          # Spring Boot entry point
│   ├── controller/
│   │   ├── LoginController.java           # /, /login, /register, /user, /admin, process_login, process_register, logout
│   │   ├── ProductController.java         # /product (mapped, no endpoints yet)
│   │   └── AdminController.java          # process_AddCustomer
│   ├── model/
│   │   ├── User.java                      # Customer (id, mobile, email, password) → register_details
│   │   ├── Admin.java                     # Admin (id, email, password) → admin_details
│   │   ├── Product.java                   # Product (id, title, description, price, category, image, discount, rate, count) → products
│   │   └── Login.java                     # DTO for login form (username, password)
│   ├── service/
│   │   └── LoginService.java              # Auth, validation, user/admin CRUD
│   └── repositories/
│       ├── UserRepository.java            # JPA: findByEmail, findByMobile, findByEmailAndPassword, findByMobileAndPassword
│       └── AdminRepository.java           # JPA: findByEmail, findByEmailAndPassword
├── src/main/resources/
│   ├── application.properties             # Server port, DB URL, JPA/Hibernate, logging
│   ├── static/
│   │   ├── css/
│   │   │   ├── style.css                  # Public & login/register styles
│   │   │   ├── styleUser.css              # User dashboard
│   │   │   └── styleAdmin.css             # Admin dashboard & pages
│   │   └── js/
│   │       ├── script.js                  # Public & login/register
│   │       └── adminScript.js             # Admin UI
│   └── templates/                         # Thymeleaf HTML
│       ├── index.html, product.html, contact.html
│       ├── login.html, register.html
│       ├── userDashboard.html
│       ├── adminDashboard.html
│       ├── adminCustomers.html, adminAddCustomers.html, adminViewCustomers.html
│       ├── adminCategories.html
│       ├── adminProducts.html, adminAddProducts.html, adminViewProducts.html, adminEditProducts.html
│       ├── adminOrders.html, adminViewOrders.html
│       ├── adminReviews.html, adminViewReviews.html
│       └── adminSettings.html, adminEditSettings.html
├── pom.xml
└── README.md
```

---

## Prerequisites

- **JDK 17**
- **Maven 3.6+**
- **MySQL 8** (or compatible) with a database named `ecommerce`

---

## Configuration

Edit `src/main/resources/application.properties`:

| Property | Description | Default in project |
|----------|-------------|--------------------|
| `server.port` | HTTP port | `2323` |
| `spring.datasource.url` | MySQL JDBC URL | `jdbc:mysql://127.0.0.1:3306/ecommerce` |
| `spring.datasource.username` | DB user | `root` |
| `spring.datasource.password` | DB password | Set to your MySQL password |
| `spring.jpa.hibernate.ddl-auto` | Schema update | `update` |

**Important:** Set `spring.datasource.password` to your actual MySQL password before running. Do not commit real passwords to version control; consider environment variables or a separate profile for production.

---

## How to Run

1. **Create MySQL database**
   ```sql
   CREATE DATABASE ecommerce;
   ```

2. **Configure** `application.properties` (especially DB username/password and URL if needed).

3. **Build and run**
   ```bash
   ./mvnw spring-boot:run
   ```
   On Windows:
   ```cmd
   mvnw.cmd spring-boot:run
   ```

4. **Open in browser**
   - App: [http://localhost:2323](http://localhost:2323)
   - Login: [http://localhost:2323/login](http://localhost:2323/login)
   - Register: [http://localhost:2323/register](http://localhost:2323/register)

5. **Admin access**  
   Ensure an admin user exists in `admin_details` (e.g. insert via SQL or a one-time setup). Login with that admin email and password to be redirected to the admin dashboard.

---

## Main Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Home |
| GET | `/product` | Products page |
| GET | `/contact` | Contact page |
| GET | `/login` | Login form |
| POST | `/process_login` | Process login (user or admin) |
| GET | `/register` | Registration form |
| POST | `/process_register` | Process registration |
| POST | `/logout` | Logout → redirect to login |
| GET | `/user` | User dashboard (after login) |
| GET | `/admin` | Admin dashboard (after admin login) |
| POST | `/process_AddCustomer` | Admin: add new customer |

---

## Database (Hibernate)

- **ddl-auto:** `update` — tables are created/updated from entities.
- **Entities:** `User` → `register_details`, `Admin` → `admin_details`, `Product` → `products`.
- **Product** entity is present; there is no `ProductRepository` or product CRUD in controllers yet.

---

## Testing

Run tests with:

```bash
./mvnw test
```

Included: `EcommerceApplicationTests` (context load).

---

## License & Credits

- **Shopie.** — E-commerce site and design.
- **Copyright 2024** — Design attributed to Dinesh Kumar M in the footer.

---

## Possible Next Steps

- Add controller mappings and backend logic for admin sections: Categories, Products, Orders, Payments, Reviews, Settings.
- Introduce `ProductRepository` and product listing/management from the database.
- Replace hardcoded DB credentials with environment variables or Spring profiles.
- Add proper session handling and role-based access control for `/user` and `/admin`.
- Fix redirect typo in `AdminController`: `adimnAddCustomers` → `adminAddCustomers` on validation failure.
