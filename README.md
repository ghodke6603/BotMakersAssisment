Here is a professional **README.md** for your project. You can copy-paste it directly into your GitHub repository.

# RBAC Authentication System

## Overview

RBAC Authentication System is a full-stack web application that demonstrates **JWT-based Authentication** and **Role-Based Access Control (RBAC)** using **Spring Boot** and **React**.

The application allows users to register, login, receive a JWT token, and access content based on their assigned role (**USER** or **ADMIN**).

---

## Features

### Authentication

* User Registration
* User Login
* JWT Token Generation
* Secure Authentication using Spring Security
* Password Encryption using BCrypt

### Authorization (RBAC)

Two roles are implemented:

| Role  | Permissions            |
| ----- | ---------------------- |
| USER  | Access User Dashboard  |
| ADMIN | Access Admin Dashboard |

### Protected Endpoints

| Endpoint               | USER | ADMIN |
| ---------------------- | ---- | ----- |
| `/api/public`          | ✅    | ✅     |
| `/api/user/profile`    | ✅    | ❌     |
| `/api/admin/dashboard` | ❌    | ✅     |

---

## Technology Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Hibernate
* MySQL
* Lombok
* MapStruct
* Maven
* Swagger/OpenAPI

### Frontend

* React
* TypeScript
* Vite
* React Router
* React Query
* Axios
* React Hook Form
* Tailwind CSS

---

## Project Architecture

```text
Frontend (React + TypeScript)
            |
            |
         Axios
            |
            |
Backend (Spring Boot)
            |
            |
 JWT Authentication
            |
            |
Spring Security
            |
            |
         MySQL
```

---

# Functional Requirements

## Registration

Users can register using:

```json
{
  "name": "Laxman",
  "email": "laxman@gmail.com",
  "password": "password123",
  "role": "USER"
}
```

Supported Roles:

```text
USER
ADMIN
```

---

## Login

Users can login using:

```json
{
  "email": "laxman@gmail.com",
  "password": "password123"
}
```

Successful login returns:

```json
{
  "token": "jwt-token",
  "role": "USER"
}
```

---

## JWT Authentication Flow

```text
Register
   ↓
Login
   ↓
Receive JWT Token
   ↓
Store Token in Local Storage
   ↓
Attach Token in Authorization Header
   ↓
Access Protected APIs
```

Authorization Header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# Frontend Pages

## Login Page

Users authenticate using email and password.

### Features

* Email Validation
* Password Validation
* JWT Storage
* Redirect to Dashboard

---

## Register Page

Users register with:

* Name
* Email
* Password
* Role

---

## Dashboard Page

Dashboard content changes dynamically according to the logged-in role.

### USER Dashboard

* User Welcome Section
* User Profile Card
* User Statistics
* Protected User Content

### ADMIN Dashboard

* Admin Welcome Section
* User Management Panel
* Role Management Section
* Admin Statistics

---

## Route Protection

Protected routes ensure only authenticated users can access the dashboard.

Example:

```tsx
<ProtectedRoute>
    <Dashboard />
</ProtectedRoute>
```

---

# Backend Implementation

## Entities

### User Entity

```java
User
 ├── id
 ├── name
 ├── email
 ├── password
 └── role
```

### Role Enum

```java
public enum Role {
    USER,
    ADMIN
}
```

---

## JWT Components

### JwtService

Responsible for:

* Token Generation
* Token Validation
* Username Extraction

### JwtAuthenticationFilter

Intercepts incoming requests and validates JWT tokens.

### SecurityConfig

Configures:

* Spring Security
* Authentication Manager
* Role-Based Authorization

---

## DTOs

### RegisterRequest

```java
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private String role;
}
```

### LoginRequest

```java
public class LoginRequest {
    private String email;
    private String password;
}
```

### LoginResponse

```java
public class LoginResponse {
    private String token;
    private String role;
}
```

---

# API Documentation

Swagger/OpenAPI is integrated for API documentation.

### Swagger URL

```text
http://localhost:8080/swagger-ui/index.html
```

Features:

* API Testing
* Request Validation
* Response Preview
* JWT Authorization Testing

---

# API Endpoints

## Authentication APIs

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## User APIs

### User Profile

```http
GET /api/user/profile
```

Role Required:

```text
USER
```

---

## Admin APIs

### Admin Dashboard

```http
GET /api/admin/dashboard
```

Role Required:

```text
ADMIN
```

---

# Postman Testing

The APIs were tested using Postman.

### User Registration

```text
POST /api/auth/register
```

Response:

```text
Email already exists
```

or

```text
User Registered Successfully
```

### User Login

```text
POST /api/auth/login
```

Response:

```json
{
  "token": "JWT_TOKEN",
  "role": "USER"
}
```

### User Profile

```text
GET /api/user/profile
```

Response:

```text
Welcome User
```

### Admin Login

```text
POST /api/auth/login
```

Response:

```json
{
  "token": "JWT_TOKEN",
  "role": "ADMIN"
}
```

### Admin Dashboard

```text
GET /api/admin/dashboard
```

Response:

```text
Welcome Admin
```

---

# Screenshots

## Login Page

<img width="1920" height="1080" alt="Screenshot (160)" src="https://github.com/user-attachments/assets/38fd5e3a-96e0-4f7b-a29b-61acf9e1ece9" />


## User Dashboard

<img width="1920" height="1080" alt="Screenshot (162)" src="https://github.com/user-attachments/assets/460e795a-ca39-4a38-a895-0d10af19f4bb" />


## Admin Dashboard

<img width="1920" height="1080" alt="Screenshot (163)" src="https://github.com/user-attachments/assets/618a9862-9554-4b8a-a681-4501f7289b80" />


## Postman Testing

<img width="1920" height="1080" alt="Screenshot (164)" src="https://github.com/user-attachments/assets/621aa878-20e8-4a68-a099-3015efbb7758" />


<img width="1920" height="1080" alt="Screenshot (165)" src="https://github.com/user-attachments/assets/a031599a-8be4-4d59-bdd5-a24d6318536f" />


<img width="1920" height="1080" alt="Screenshot (166)" src="https://github.com/user-attachments/assets/fca0ca10-1f35-403a-b458-7cd1ec920326" />


<img width="1920" height="1080" alt="Screenshot (167)" src="https://github.com/user-attachments/assets/96e0f7b6-355d-4167-a3af-f4bb460eda26" />


<img width="1920" height="1080" alt="Screenshot (168)" src="https://github.com/user-attachments/assets/cb1c9fc6-e617-44c1-b2a8-4feccb7c0318" />


<img width="1920" height="1080" alt="Screenshot (169)" src="https://github.com/user-attachments/assets/946f1ecd-9be7-4b5e-a6b6-489214d97e76" />






# Installation

## Backend

```bash
git clone <repository-url>

cd backend

mvn clean install

mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Future Enhancements

* Refresh Tokens
* Forgot Password
* Email Verification
* Role Management UI
* User CRUD Operations
* Audit Logging
* Docker Deployment
* CI/CD Pipeline

---

# Learning Outcomes

This project demonstrates:

* Full Stack Development
* JWT Authentication
* Role-Based Authorization
* Spring Security
* REST API Development
* React Frontend Integration
* Route Protection
* API Documentation using Swagger
* Postman API Testing

---

## Author

**Laxman Ghodke**

**RBAC Authentication System using Spring Boot, React and JWT**
