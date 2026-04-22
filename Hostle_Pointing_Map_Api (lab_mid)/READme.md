Here’s a cleaner, more professional, and submission-ready version of your README/documentation. I’ve fixed structure, grammar, consistency, and made it look like a strong academic + GitHub project file.

---

# **Vehari City Map – Hostel Management System (REST API System)**

**Developed by:** Maryam Shabbir (SP23-BSE-012)
**Course:** Advanced Web Development (Semester 7)
**Instructor:** Mam Yasmeen Jana
**Submission Date:** March 30, 2026

---

## 🔗 Project Links

* **GitHub Repository:**
  [https://github.com/Maryam-Shabbir-Projects/Advance-Web-sp23-bse-012-/tree/main/Hostle_Pointing_Map_Api%20(lab_mid)](https://github.com/Maryam-Shabbir-Projects/Advance-Web-sp23-bse-012-/tree/main/Hostle_Pointing_Map_Api%20%28lab_mid%29)

* **Video Demonstration:**
  [https://drive.google.com/file/d/1Ny301eMuOZEYSiYu3gxM_nA3lSZNjGFE/view?usp=sharing](https://drive.google.com/file/d/1Ny301eMuOZEYSiYu3gxM_nA3lSZNjGFE/view?usp=sharing)

---

## 📌 Table of Contents

1. Abstract
2. Introduction
3. System Overview
4. System Architecture
5. Functional Requirements
6. Non-Functional Requirements
7. Use Cases
8. API Endpoints
9. Database Design
10. User Interface
11. Implementation Details
12. Testing & Results
13. Conclusion

---

## 1. 📖 Abstract

The **Vehari City Map – Hostel Management System** is a web-based application that provides an interactive map of Vehari city. It allows users to explore hostels and nearby landmarks, while an admin dashboard enables full CRUD (Create, Read, Update, Delete) operations on hostel data through a REST API.

---

## 2. 📘 Introduction

This project is designed to help users easily locate hostels in Vehari using a map-based interface. It also provides an administrative panel where authorized users can manage hostel data efficiently.

---

## 3. 🧩 System Overview

### 👤 Users

* View hostels on map
* Access hostel details and locations

### 🔐 Admin

* Secure login
* Manage hostel data (Add, Edit, Delete)

### ⚙️ Technologies Used

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Frontend:** EJS, HTML, CSS, JavaScript

---

## 4. 🏗️ System Architecture

### Components:

1. **Node.js & Express.js** – Backend server and routing
2. **MongoDB** – Database for storing hostel data
3. **Mongoose** – ODM for schema modeling
4. **EJS Templates** – Dynamic UI rendering
5. **Public Folder** – Static assets (CSS, JS)
6. **Routes** – API endpoints & admin routes

---

## 5. ✅ Functional Requirements

| ID  | Feature        | Description                           |
| --- | -------------- | ------------------------------------- |
| FR1 | View Hostels   | Users can view hostels on the map     |
| FR2 | Hostel Details | View hostel info and nearby landmarks |
| FR3 | Admin Login    | Secure login using password           |
| FR4 | Add Hostel     | Admin can add new hostels             |
| FR5 | Edit Hostel    | Admin can update hostel data          |
| FR6 | Delete Hostel  | Admin can remove hostels              |
| FR7 | REST API       | API supports CRUD operations          |

---

## 6. ⚡ Non-Functional Requirements

* **Performance:** API response time under 1 second
* **Security:** Admin credentials stored in `.env`
* **Scalability:** MongoDB supports large data growth
* **Usability:** Simple, responsive UI with map integration

---

## 7. 🔄 Use Cases

### 🧍 Use Case 1: View Hostels

* **Actor:** User
* **Flow:**

  1. Visit homepage (`/`)
  2. View hostel markers on map
  3. Click marker to view details

### 🛠️ Use Case 2: Manage Hostels

* **Actor:** Admin
* **Flow:**

  1. Open `/admin`
  2. Enter password
  3. Add/Edit/Delete hostel data

---

## 8. 🔗 API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | `/api/hostels`     | Get all hostels        |
| GET    | `/api/hostels/:id` | Get single hostel      |
| POST   | `/admin/add`       | Add new hostel (Admin) |
| PUT    | `/api/edit/:id`    | Update hostel (Admin)  |
| DELETE | `/admin`           | Delete hostel (Admin)  |
| POST   | `/admin/login`     | Admin login            |
| GET    | `/hostel/:id`      | Hostel detail page     |
| GET    | `/`                | User map view          |
| POST   | `/register`        | User registration      |
| POST   | `/login`           | User login             |
| GET    | `/logout`          | Logout                 |

---

## 9. 🗄️ Database Design

### Collection: **Hostels**

| Field       | Type     | Description        |
| ----------- | -------- | ------------------ |
| _id         | ObjectId | Unique identifier  |
| name        | String   | Hostel name        |
| address     | String   | Hostel location    |
| price       | Number   | Monthly rent       |
| latitude    | Number   | Map latitude       |
| longitude   | Number   | Map longitude      |
| description | String   | Additional details |

10. User Interface Screens
 1.	Registration Page(/register)
   <img width="416" height="321" alt="image" src="https://github.com/user-attachments/assets/ea29294e-3b7e-4e78-a3ff-5c109867248b" />
 2.	 Login Page  (/login)
 <img width="543" height="405" alt="image" src="https://github.com/user-attachments/assets/3e3222b7-c7f6-4e4c-9217-33e7867f464c" />
3.	Admin Dashboard (/admin)
     <img width="561" height="342" alt="image" src="https://github.com/user-attachments/assets/d20f4178-0090-471d-95b1-74a64a671368" />
o	List all hostels with Add/Edit/Delete options.
 <img width="780" height="382" alt="image" src="https://github.com/user-attachments/assets/61dbdc5c-d418-4fe7-b754-14e8f86ffe4d" />
4.	Add Hostel (/admin/add)
o	Form to input hostel info.
 <img width="825" height="737" alt="image" src="https://github.com/user-attachments/assets/9ad555a8-e8bb-4b4c-8fda-2d6041951eb9" />
5.	     Edit Hostel (/admin/edit/:id)
o	Form populated with existing hostel info.
<img width="746" height="540" alt="image" src="https://github.com/user-attachments/assets/fb339c8d-6b21-41f6-b67a-896f923a08b8" />
6.	User Map (/)
o	Map displaying hostel markers.
 <img width="1033" height="587" alt="image" src="https://github.com/user-attachments/assets/e53622ca-6979-4f39-9275-58d7eff47f6e" />
7.	Hostel Detail (/hostel/:id)
o	Hostel info and landmarks.
 <img width="965" height="478" alt="image" src="https://github.com/user-attachments/assets/119d4f92-3aea-4245-be43-00b4af6a401f" />
 _______________________________________
 
11. Implementation Details
Backend: Node.js + Express
•	Routes are organized into hostelRoutes and adminRoutes.
•	Middleware for parsing JSON and URL-encoded forms.
•	Dummy auth middleware sets user/admin roles.
Frontend: EJS templates
•	Dynamic rendering of hostels and forms.
•	Home page with admin login prompt.
Database: MongoDB + Mongoose
•	Hostel schema with fields for name, address, price, latitude, longitude, description.
•	CRUD operations connected to admin route


13. Testing & Results
•	Admin login tested with correct and incorrect password.
•	CRUD operations tested successfully.
•	API endpoint /api/hostels returns JSON correctly.
•	User map shows accurate hostel markers.
________________________________________

13. Conclusion
The Vehari City Map project provides an interactive map interface for users and a full admin panel for hostel management. It implements secure admin login, functional CRUD operations, and responsive UI, making it scalable and maintainable.
________________________________________



