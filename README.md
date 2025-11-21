📌 HRMS – Human Resource Management System

A full-stack HRMS application built using:

Frontend: React + Vite + Tailwind

Backend: Node.js + Express + Sequelize ORM

Database: MySQL

Authentication: JWT

Features: Org registration, login, employees CRUD, teams CRUD, secure APIs

🚀 Features
👤 Authentication

✔ Register an Organisation
✔ Login with Email & Password
✔ JWT-based secure API access

👥 Employees

✔ Add Employee
✔ View Employees
✔ Edit Employee
✔ Delete Employee

🏢 Teams

✔ Create Team
✔ Update/Delete Team
✔ Assign employees to teams

📁 Project Structure
hrms/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── employeeController.js
│   │   │   └── teamController.js
│   │   ├── middlewares/
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   ├── Organisation.js
│   │   │   ├── User.js
│   │   │   ├── Employee.js
│   │   │   └── Team.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── employeeRoutes.js
│   │   │   └── teamRoutes.js
│   │   └── index.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json

⚙️ Installation & Setup



npm install

Create .env file
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=Anil@123
DB_NAME=hrms_db
JWT_SECRET=your_secret_key

Start backend server
npm run dev

2️⃣ Frontend Setup


npm install

Run frontend
npm run dev

🗄️ API Endpoints
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register organisation
POST	/api/auth/login	Login user
👥 Employees
Method	Endpoint	Description
GET	/api/employees	Get all employees
POST	/api/employees	Add employee
PUT	/api/employees/:id	Update employee
DELETE	/api/employees/:id	Delete employee
🏢 Teams
Method	Endpoint	Description
GET	/api/teams	Get all teams
POST	/api/teams	Create team
PUT	/api/teams/:id	Update team
DELETE	/api/teams/:id	Delete team
🔒 Authentication Flow

Organisation registers → user created → JWT generated

Login returns a JWT token

Token is required in headers:

Authorization: Bearer <token>

🧰 Tech Stack
Backend:

Node.js

Express.js

Sequelize ORM

MySQL

JWT Authentication

bcryptjs

Frontend:

React

Vite

TailwindCSS

Axios

Context API

🧑‍💻 Developer Setup
Run backend and frontend together:
npm run dev 



