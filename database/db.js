import { Sequelize } from "sequelize";

const conection_db = new Sequelize('api_book', 'root', '1234', {
    host: 'localhost',
    dialect:'mysql' , 
    define:
        {timestamps: false}
  });

  export default conection_db