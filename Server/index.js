const express = require("express");
const dotenv = require("dotenv");
const path = require("path")
const app = express();

//import middlewares
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// const __dirname= path.resolve()
//middlewares
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

//routes
const authRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const transactionRoutes = require("./routes/Transaction");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/transaction", transactionRoutes);
//connect to db
const connectDB = require("./config/db");
connectDB();

//cloudinary
const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect();
//server
const PORT = process.env.PORT || 3000;


if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"/client/dist")))

  app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
 });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
