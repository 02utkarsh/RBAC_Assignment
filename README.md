# Role-Based Access Control (RBAC) System

The **RBAC System** is a full-stack web application for managing users, roles, and permissions. Follow the steps below to set up and run the project.

---

## Prerequisites
- **Node.js** (includes npm) installed on your system.
- **PostgreSQL** installed for database management.

---

## Project Setup

### 1. Setting Up the Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
Install dependencies:
npm install

Start the development server:
npm run dev

2. Setting Up the Backend
Navigate to the backend folder:
cd backend

Install dependencies:

npm install
Create a .env file in the backend directory with the following contents:

DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
Replace the placeholders with:

DATABASE_URL: Your PostgreSQL database connection string.
JWT_SECRET: A secret key for encrypting and decrypting JWT tokens.
ADMIN_EMAIL and ADMIN_PASSWORD: Default admin credentials for logging in.

Start the backend server:
npm run dev
3. Setting Up the Database
Ensure PostgreSQL is installed and running.

Create a new database and note the connection URL to use in the .env file.

In most cases, the required tables and schema are created automatically. If not, execute the following SQL query in your PostgreSQL database to manually create the User table:

CREATE TYPE "Role" AS ENUM ('USER', 'SUPER_USER', 'ADMIN');

CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
The project includes a default admin account pre-configured in the .env file. Use the following credentials for the initial admin login:

Email: ADMIN_EMAIL (from .env).
Password: ADMIN_PASSWORD (from .env).
4. Running the Project
Start both frontend and backend servers as described above.
Access the application in your browser at http://localhost:<frontend_port> (default port is typically 3000).
Admin Login
Use the default admin credentials defined in the .env file:

Email: ADMIN_EMAIL
Password: ADMIN_PASSWORD

### Explanation:
- The project setup is divided into clear sections for **Frontend**, **Backend**, and **Database** setup.
- Each step includes the exact terminal commands needed to install dependencies and configure the project.
- There are clear instructions to create and configure a `.env` file, including what values to replace.
- The database setup section includes SQL queries for creating the required `User` table if needed.
- Admin login details are specified with clear instructions on how to use the default credentials from the `.env` file.

This version will render well on GitHub with proper sectioning, code blocks, and formatting.





