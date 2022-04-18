// importamos la conexion a base de datos
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const blogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default blogModel;
