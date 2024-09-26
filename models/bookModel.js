import conection_db from "../database/db.js";
import {DataTypes} from 'sequelize';

const bookModel = conection_db.define(
    'Book',
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false
    },
  );
  
export default bookModel;