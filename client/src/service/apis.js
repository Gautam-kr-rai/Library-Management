// const baseURL = `${import.meta.env.VITE_BASE_URL}/api/v1`;

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:5000/api/v1"; 

export const endpoints = {
  login: `${baseURL}/auth/login`,
  signup: `${baseURL}/auth/signup`,
  addBook: `${baseURL}/book/addBook`,
  getAvailableBooks: `${baseURL}/book/getAvailableBooks`,
  borrowBook: `${baseURL}/transaction/borrow`,
  returnBook: `${baseURL}/transaction/return`,
  getBooks: `${baseURL}/book/getBooks`,
  getIssuedBooks: `${baseURL}/book/getIssuedBooks`,
};
