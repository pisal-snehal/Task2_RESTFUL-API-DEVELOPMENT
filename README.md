
# Task 2 - RESTful API for Library System

## 🏢 Company Details
- **Company**: CODTECH IT SOLUTIONS  
- **Intern Name**: Snehal Pisal  
- **Intern ID**: CT04DN1381  
- **Domain**: Software Development  
- **Duration**: 4 Weeks  
- **Mentor**: Neela Santosh  

---

## 📌 Project Overview

This project involves designing and building a **RESTful API** for a **Library Management System** using Node.js and Express.js. It provides full **CRUD operations** to manage books (Create, Read, Update, Delete) and stores data in memory for demonstration purposes.

---

## 💡 Technologies Used

- Node.js  
- Express.js  
- UUID for unique book IDs  
- Postman (for API testing)

---

## 📁 Project Structure

```
📂 library-api/
├── index.js         # API routes and logic
├── package.json     # Project dependencies
└── node_modules/    # Installed libraries
```

---

## ⚙️ How to Run Locally

1. Clone the repository or download the project files  
2. Open a terminal in the project directory  
3. Install the dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   node index.js
   ```
5. The API will run at:  
   **http://localhost:8080**

---

## 📑 API Documentation

**Base URL**: `http://localhost:8080`

| Method | Endpoint       | Description            | Request Body                             | Sample Response                       |
|--------|----------------|------------------------|------------------------------------------|----------------------------------------|
| GET    | `/books`       | Get all books          | —                                        | List of all books                     |
| POST   | `/books`       | Add a new book         | `{ "title": "X", "author": "Y" }`        | Created book object + success message |
| GET    | `/books/:id`   | Get a book by ID       | —                                        | Book object or 404 error              |
| PATCH  | `/books/:id`   | Update book by ID      | `{ "title": "New", "author": "New" }`    | Updated book + success message        |
| DELETE | `/books/:id`   | Delete book by ID      | —                                        | Deletion message or 404 error         |

---

## 🧾 Sample Book Data

```json
[
  {
    "id": "uuid",
    "title": "Chava",
    "author": "Shivaji Sawant"
  },
  {
    "id": "uuid",
    "title": "Wings of Fire",
    "author": "A.P.J Abdul Kalam"
  }
]
```

---

## 🧪 Postman Testing

All the API endpoints were tested using **Postman**:

- ✔️ Sent GET, POST, PATCH, DELETE requests  
- ✔️ Received proper JSON responses  
- ✔️ Handled invalid IDs with 404 errors  
- ✔️ Confirmed correct status codes (200, 201, 404)

---

## ⚠️ Limitations

- Data is stored in memory and resets on server restart  
- No database or persistent storage  
- No input validation or authentication  

---

## 🔮 Future Enhancements

- Connect to a database (MongoDB or MySQL)  
- Add full validation and error handling  
- Implement user login/authentication  
- Create a frontend interface for managing books  

---

## 📷 Output Screenshots

![Image](https://github.com/user-attachments/assets/76380ebf-17f3-42d4-a761-1ef9663acb0a)  
![Image](https://github.com/user-attachments/assets/f86ca3bb-9a80-4f88-99c6-b3f6d4de8848)  
![Image](https://github.com/user-attachments/assets/c3e0082a-16a4-4f02-b63e-2c406b3af98e)  
![Image](https://github.com/user-attachments/assets/3a687b85-bfd3-4004-bf08-da8f2cf00c14)  
![Image](https://github.com/user-attachments/assets/05ade3a1-579a-419a-9086-9b502c13e306)  

---

## ✅ Status

**Task 2 Completed Successfully ✅**  
Tested thoroughly using **Postman** with all CRUD operations working as expected.
