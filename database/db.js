import { Sequelize } from "sequelize";

const db = new Sequelize("database_otto", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
