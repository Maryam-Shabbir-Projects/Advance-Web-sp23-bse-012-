
Vehari City Map Project Documentation
________________________________________
Project Title: Vehari City Map – Hostel Management System (Rest API sytem)
Developed by: Maryam Shabbir (SP23-BSE-012)
Course: Advanced Web Development, Semester 7
Instructor: Mam. Yasmeen Jana
Date: 3/30/2026
________________________________________

                                       
	COMSATS University Islamabad
                                                   Campus Vehari












Table of Contents
1.	Abstract
2.	Introduction
3.	System Overview
4.	System Architecture
5.	Functional Requirements
6.	Non-Functional Requirements
7.	Use Case Description
8.	API Endpoints
9.	Database Design
10.	User Interface Screens
11.	Implementation Details
12.	Testing & Results
13.	Conclusion








GitHub : https://github.com/Maryam-Shabbir-Projects/Advance-Web-sp23-bse-012-/new/main/Hostle_Pointing_Map_Api%20(lab_mid)
Video Demonstration :  
1. Abstract
This project is a web application that provides an interactive city map of Vehari, displaying hostels, landmarks, and supporting an admin dashboard for CRUD operations. Users can view hostel locations and details, while the admin can manage the hostel data.

2. Introduction
The Vehari City Map project is a web-based application allowing users to view hostels and important landmarks in Vehari city. Administrators can manage hostel data including adding, editing, and deleting hostels.
________________________________________
3. System Overview
•	Users: General users who view hostels and landmarks.
•	Admin: Can perform CRUD operations on hostels.
•	Technologies: Node.js, Express.js, MongoDB, Mongoose, EJS, HTML, CSS, JavaScript.
________________________________________
4. System Architecture
Components:
1.	Node.js & Express - Backend server handling routes and APIs.
2.	MongoDB - Database for hostel data.
3.	EJS Templates - Dynamic front-end rendering.
4.	Public Folder - Static CSS, JS files.
5.	Routes - API endpoints and admin dashboard routes.
________________________________________

5. Functional Requirements
ID	Requirement	Description
FR1	View hostels	Users can view a list of hostels on the map
FR2	Hostel details	Users can see hostel info and nearby landmarks
FR3	Admin login	Admin must enter a password to access admin dashboard
FR4	Add hostel	Admin can add new hostels via /admin/add
FR5	Edit hostel	Admin can edit existing hostel info via /admin/edit/:id
FR6	Delete hostel	Admin can delete hostel data
FR7	REST API	API endpoint /api/hostels allows CRUD operations
________________________________________
6. Non-Functional Requirements
•	Performance: API responds within 1 second for typical requests.
•	Security: Admin login protected via password stored in .env.
•	Scalability: MongoDB allows adding more hostels without affecting performance.
•	Usability: Simple user interface with map icons and responsive design.
________________________________________
7. Use Case Description
Use Case 1: User Views Hostel
•	Actor: User
•	Description: User visits / to view hostels.
•	Flow: Open /. Click hostel marker to view details.
Use Case 2: Admin Manages Hostels
•	Actor: Admin
•	Description: Admin logs in and manages hostels.
•	Flow: Open /admin. Enter password. Add/Edit/Delete hostels.________________________________________
8. API Endpoints
Method	Endpoint	   Description
GET	/api/hostels	   List all hostels
POST	/admin/add	  Add new hostel(Admin only)
GET        	/api/hostels/:id 	  Get Hostle Details
PUT	/api/edit/:id	  Update hostel info(Amin Only)
DELETE	/admin	   Delete hostel (Admin Only)
POST	/admin/login	Admin login
GET	/hostel/:id	Hostel detail page
GET         /                                user map page
POST      /register                     Register 
POST      /login            Login
GET          /logout                       logout 
________________________________________
9. Database Design
Collection: Hostels
Field	Type	Description
_id	ObjectId	Unique ID
name	String	Hostel name
address	String	Hostel address
price	Number	Price per month
latitude	Number	Latitude coordinates
longitude	Number	Longitude coordinates
description	String	Additional info
________________________________________
10. User Interface Screens
1.	Registration Page(/register)
 


2.	 Login Page  (/login)
 

3.	Admin Dashboard (/admin)
     

o	List all hostels with Add/Edit/Delete options.
 
4.	Add Hostel (/admin/add)
o	Form to input hostel info.
 
 
5.	     Edit Hostel (/admin/edit/:id)
o	Form populated with existing hostel info.

 
 
6.	User Map (/)
o	Map displaying hostel markers.
 
7.	Hostel Detail (/hostel/:id)
o	Hostel info and landmarks.
 
________________________________________
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
•	CRUD operations connected to admin routes.

12. Testing & Results
•	Admin login tested with correct and incorrect password.
•	CRUD operations tested successfully.
•	API endpoint /api/hostels returns JSON correctly.
•	User map shows accurate hostel markers.
________________________________________
13. Conclusion
The Vehari City Map project provides an interactive map interface for users and a full admin panel for hostel management. It implements secure admin login, functional CRUD operations, and responsive UI, making it scalable and maintainable.
________________________________________



