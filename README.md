# Taskly ✅

A full-stack task management web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Organize your tasks, track progress, and stay productive — all in one place.

🌐 **Live Demo:** [taskly-one.onrender.com](https://taskly-one.onrender.com)

---


## ✨ Features

- 📝 Create, update, and delete tasks
- ✅ Mark tasks as complete / incomplete
- 🔐 User authentication (JWT-based login & registration)
- 📱 Responsive design with Tailwind CSS — works on mobile and desktop
- ⚡ Fast frontend powered by Vite + React

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Frontend    | React.js (Vite), Tailwind CSS     |
| HTTP Client | Axios                             |
| Backend     | Node.js, Express.js               |
| Database    | MongoDB, Mongoose                 |
| Auth        | JSON Web Tokens (JWT)             |
| Deployment  | Render                            |

---

## 📁 Project Structure

```
TODO-MERN-APP/
│
├── backend/
│   ├── src/
│   │   ├── controllers/        # Route handler logic
│   │   ├── db/                 # Database connection
│   │   ├── middlewares/        # Auth & error middleware
│   │   ├── models/             # Mongoose schemas
│   │   ├── routes/             # API route definitions
│   │   └── app.js              # Express app setup
│   ├── .env                    # Backend environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js               # Server entry point
│
└── frontend/
    ├── dist/                   # Production build output
    ├── public/
    ├── src/
    │   ├── api/
    │   │   └── axios.js        # Axios instance & API config
    │   ├── assets/             # Images, icons, static files
    │   ├── pages/              # Page-level React components
    │   ├── App.jsx             # Root component & routing
    │   ├── index.css           # Global styles (Tailwind directives)
    │   └── main.jsx            # React entry point
    ├── .env                    # Frontend environment variables
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    └── vite.config.js          # Vite configuration
```

---


## 👤 Author

**Tanishk panchal**
- LinkedIn:(https://www.linkedin.com/in/tanishk-panchal-6694a0373?utm_source=share_via&utm_content=profile&utm_medium=member_android)

---

> Built with ❤️ using the MERN stack + Tailwind CSS`