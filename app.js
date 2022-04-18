import express from "express";
import cors from "cors";
import db from "./database/db.js";
import router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", router);

try {
  db.authenticate();
  console.log("conexion exitosa a la DB");
} catch (error) {
  console.log(`Error al conectar a la DB: ${error} `);
}

app.get("/", (req, res) => {
  res.send("hola mundo!!");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
