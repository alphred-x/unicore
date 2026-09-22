# UniCore: The Resilient Campus Management Portal

UniCore is a robust, cloud-native backend designed to modernize college management systems. It addresses the critical issue of server crashes during high-traffic events (like exam results or admissions) by utilizing a scalable microservices architecture.

This repository contains the **Backend API** built with Spring Boot and secured with Spring Security & JWT.

## Key Features

* **Microservices Architecture:** Modular design for high availability and fault tolerance.
* **Secure Authentication:** User registration and login protected by BCrypt password hashing.
* **JWT Authorization:** Stateless session management using JSON Web Tokens.
* **Role-Based Data:** Foundation for separating Student, Faculty, and Admin roles.
* **PostgreSQL Integration:** Reliable, persistent data storage.

## Technology Stack

* **Language:** Java 17
* **Framework:** Spring Boot 3
* **Security:** Spring Security, JWT (JSON Web Tokens)
* **Database:** PostgreSQL
* **Build Tool:** Maven
* **Tools:** IntelliJ IDEA, Postman

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Java 17 or higher
* PostgreSQL installed and running
* Maven (or use the included `mvnw` wrapper)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/unicore.git
    cd unicore
    ```

2.  **Configure the Database**
    * Create a new PostgreSQL database named `unicore_db`.
    * Open `src/main/resources/application.properties`.
    * Update the username and password with your local PostgreSQL credentials:
        ```properties
        spring.datasource.username=postgres
        spring.datasource.password=your_db_password
        ```

3.  **Run the Application**
    * **Using Terminal:**
        ```bash
        ./mvnw clean spring-boot:run
        ```
    * **Using IntelliJ:** Open `UnicoreApplication.java` and click the Green Play button.

## 🔌 API Endpoints

You can test these endpoints using Postman.

### 1. User Registration
* **Endpoint:** `POST /api/auth/register`
* **Description:** Creates a new user account.
* **Body (JSON):**
    ```json
    {
      "email": "student@college.edu",
      "password": "securePassword123",
      "fullName": "Rahul Sharma",
      "collegeIdNumber": "S-2023-001"
    }
    ```

### 2. User Login
* **Endpoint:** `POST /api/auth/login`
* **Description:** Authenticates a user and returns a JWT token.
* **Body (JSON):**
    ```json
    {
      "email": "student@college.edu",
      "password": "securePassword123"
    }
    ```
* **Response:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHVkZW50..."
    }
    ```

## Team Decoderz

* **[AMAN PRAJAPATI]** - Backend Developer
* **[SPARSH TOMAR]** - Database Architect
* **[HIMANSHU]** - Testing & Documentation

---
*Built with ❤️ by Team Decoderz*
