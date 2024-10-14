import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME, NODE_ENV, DB_TEST_NAME } from "../config.js";

const DB_NAME = NODE_ENV==="test" ? DB_TEST_NAME: DB_DEV_NAME //Con esto le digo a que base de datos debe acceder, a la test o a la de desarrollo

const conection_db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect:'mysql' , 
    define:
        {timestamps: false}
  });

  export default conection_db