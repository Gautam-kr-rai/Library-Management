**Librarian Credentials**
 
Link: https://library-management-1-znze.onrender.com

- email:- Librarian@gmail.com
- password:- 123456
  
﻿**Borrower Credentials**

- email:- test@gmail.com
- password:- 123456
  
# [MERN Stack Library Management System]

This project is a web-based Library Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It offers a streamlined and user-friendly solution for managing books, borrowers, and transactions in a library setting.

## Features:

**User Management:**

- Secure login with username and password (hashed for security).
- User roles (Librarian, Borrower) with differentiated access control.
- Registration for new users (Librarians can also create new Borrower accounts).

**Book Management (Librarians):**

- Add new books with details like title, author, genre, ISBN, description, and optional cover image.
- Edit existing book details.
- Track book availability (available, borrowed).

**Book Borrowing (Borrowers):**

- Search for books by title, author, genre, or keyword.
- Browse a catalog of available books.
- View detailed information about each book, including availability.
- Request to borrow available books.
- Borrowers can return borrowed books, updating the system's availability status.

**General Features:**

- User-friendly interface with search and filter options.
- Secure data storage and communication (HTTPS).
- Error handling and validation for user input.

## Installation Instructions

### Prerequisites

Before installing the application, ensure you have the following tools installed:

- Node.js and npm (or yarn)

### Installation Steps

1. **Fork the repository:**
   Navigate to the project repository on GitHub at and click the "Fork" button. This will create a copy of the repository in your own GitHub account.

2. **Clone the repository locally:**
   Open your terminal and navigate to the directory where you want to work on the project. Then, use the `git clone` command to clone your forked repository, replacing `<your-username>` with your actual GitHub username:

   ```bash
   git clone https://github.com/<your-username>/Library-Management-System.git
   ```

3. **Install dependencies:**
   Navigate into the project directory:

   ```bash
   cd Library-Management-System
   ```

   Install dependencies for both the client and server applications:

   ```bash
   npm install
   ```

4. **Start the application:**

   - **Client Application:**
     Navigate to the client directory:

     ```bash
     cd client
     ```

     Start the development server:

     ```bash
     npm run start
     ```

   - **Server Application:**
     Navigate to the server directory:

     ```bash
     cd server
     ```

     Start the server:

     ```bash
     npm run start
     ```

**Additional Notes:**

- For production deployment, additional configuration steps might be necessary depending on your chosen hosting environment.
- Ensure you replace `<your-username>` in the clone command with your actual GitHub username.

Following these steps should successfully set up your local development environment for the Library-Management-System application.

## Additional Dependencies or Libraries Used

By running `npm install` in both the `client` and `server` directories, you can automatically install the following additional dependencies:

**Client-Side:**

- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `axios`
- `react-hook-form`
- `react-icons`
- `react-router-dom`

**Server-Side:**

- `bcrypt`
- `cloudinary`
- `cookie-parser`
- `cors`
- `dotenv`
- `express-fileupload`
- `jsonwebtoken`
- `nodemon`
