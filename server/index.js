import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import initRoutes from "./src/routes";
import connectDatabase from "./src/config/connectDatabase";
import generateCode from "./src/utils/generateCode";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST, GET, PUT, DELETE"],
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
initRoutes(app);
connectDatabase();

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log("server is running on port: " + port);
});
