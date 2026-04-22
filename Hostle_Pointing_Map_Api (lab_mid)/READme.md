

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

**10. 🖥️ User Interface Screens**
 1.	Registration Page(/register)
   <img width="1195" height="801" alt="image" src="https://github.com/user-attachments/assets/82e83d11-09ea-4e14-8b47-15aa2c07f53b" />

 2.	 Login Page  (/login)
 <img width="1158" height="709" alt="image" src="https://github.com/user-attachments/assets/d371a081-d503-4169-bdcd-45a2115d6fc4" />

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
**11. ⚙️ Implementation Details**

🔹 Backend: Node.js + Express

Routes are organized into:

hostelRoutes
adminRoutes
Middleware used for:
Parsing JSON data
Handling URL-encoded form data
Basic authentication implemented using dummy middleware for admin/user roles

🔹 Frontend: EJS Templates

Dynamic rendering of hostel data and forms
Reusable templates for consistency
Home page includes admin login access

🔹 Database: MongoDB + Mongoose

Defined Hostel Schema with fields:

Name
Address
Price
Latitude
Longitude
Description
Full CRUD operations integrated with admin routes


**12. 🧪 Testing & Results**

✅ Admin login tested with both valid and invalid credentials

✅ All CRUD operations (Create, Read, Update, Delete) working correctly

✅ API endpoint /api/hostels returns proper JSON data

✅ Map displays accurate hostel markers based on coordinates

✅ UI tested for responsiveness and usability

**13. 🎯 Conclusion**

The project successfully demonstrates a full-stack web application integrating maps, REST APIs, and database management. It provides a practical solution for hostel discovery in Vehari and showcases strong concepts of backend development and system design.



