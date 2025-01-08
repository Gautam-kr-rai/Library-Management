const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const app = express();

// Import middlewares
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Middlewares
dotenv.config();
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

// Routes
const authRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const transactionRoutes = require("./routes/Transaction");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/transaction", transactionRoutes);

// Connect to DB
const connectDB = require("./config/db");
connectDB();

// Cloudinary
const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect();

// Serve static files (client/dist)
const distPath = path.resolve(__dirname, "client", "dist");

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
} else {
  console.error("Static files not found. Did you forget to build the client?");
}

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
