const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

// Import middlewares
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "tmp",
  })
);

// Import routes
const authRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const transactionRoutes = require("./routes/Transaction");

// Register routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/transaction", transactionRoutes);

// Connect to DB
const connectDB = require("./config/db");
connectDB();

// Cloudinary connection
const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect();

// Define the port
const PORT = process.env.PORT || 3000;

// Serve static files in production
if (process.env.NODE_ENV === "development") {
  app.use(express.static(path.resolve(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
