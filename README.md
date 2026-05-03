# Job Portal Backend

A RESTful API for a job portal built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| Node.js | >= 20.19.0 |
| Express.js | ^5.2.1 |
| MongoDB + Mongoose | ^9.5.0 |
| bcryptjs | ^3.0.3 |
| jsonwebtoken | ^9.0.3 |
| dotenv | ^17.4.2 |
| nodemon (dev) | ^3.1.14 |

---

## 📁 Project Structure

```
├── controls/
│   ├── jobControllers.js
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
│   └── validationMiddleware.js
├── models/
│   ├── Jobs.js
│   └── User.js
├── routes/
│   ├── index.js
│   ├── jobRoutes.js
│   └── userRoute.js
├── .env
├── .gitignore
├── databaseConnection.js
├── seedAdmin.js
├── index.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 20.19.0
- MongoDB (local or Atlas)

### 1. Clone the Repository

Clone this repo and navigate into the project folder.

```bash
git clone https://github.com/TheLoneSoul/Job-Portal-Backend-MEN-Stack-.git
cd Job-Portal-Backend-MEN-Stack-
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:

```bash
# Production dependencies
npm install express mongoose bcryptjs jsonwebtoken dotenv

# Dev dependencies
npm install --save-dev nodemon
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
mongoDatabaseURI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
PORT=<any_port_you_want>
```

> 💡 `mongoDatabaseURI` can be a local MongoDB URI like `mongodb://localhost:27017/jobportal` or a MongoDB Atlas connection string.

### 4. Seed Admin User

Before starting the server, seed the default admin user into the database:

```bash
npm run seed:admin
```

> ⚠️ Default admin credentials are defined in `seedAdmin.js`. Make sure to update them before deploying to production.

### 5. Run the Server

```bash
# Development (nodemon — auto restarts on file change)
npm run dev

# Production
npm start
```

> Server runs on **http://localhost:\<PORT\>**

---

## 📌 API Endpoints

Base URL: `/api`

### 👤 User Routes `/api/user`

| Method | Endpoint | Description | Access | Validation |
|---|---|---|---|---|
| POST | `/api/user/register` | Register new user | Public | name, email, password required |
| POST | `/api/user/signin` | Login and get JWT token | Public | email, password required |
| GET | `/api/user/` | Get all users | Admin only | — |

### 💼 Job Routes `/api/jobs` *(JWT required)*

| Method | Endpoint | Description | Access | Validation |
|---|---|---|---|---|
| GET | `/api/jobs/` | Get all jobs (search, sort, paginate) | Protected | — |
| GET | `/api/jobs/:id` | Get job by ID | Protected | — |
| POST | `/api/jobs/` | Create a new job | Protected | title, company, description required |
| PUT | `/api/jobs/:id` | Update a job | Protected | — |
| DELETE | `/api/jobs/:id` | Delete a job | Protected | — |

---

## 🔍 Search, Sort & Pagination

```
GET /api/jobs?search=developer&sort=latest&page=1&limit=3
```

| Param | Options | Default |
|---|---|---|
| `search` | Any keyword (searches title & description) | — |
| `sort` | `latest`, `oldest`, `high`, `low` | `latest` |
| `page` | Page number | `1` |
| `limit` | Results per page | `3` |

---

## 🔐 Authentication

Register or signin to get your JWT token, then add it to every protected request:

```
Authorization: Bearer <your_token>
```

> Token expires in **1 day**.

---

## 👤 User Roles

| Role | Permissions |
|---|---|
| `user` (default) | Access all job routes |
| `admin` | Access job routes + get all users |

> 💡 To get admin access, use the seeded admin credentials from `seedAdmin.js` to signin and get your admin token.

---

## 📄 License

MIT
