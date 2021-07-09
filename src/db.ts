import { Sequelize } from 'sequelize-typescript';

export const db = new Sequelize( 
    process.env.DB_NAME as string, 
    process.env.DB_USER as string , 
    process.env.DB_PASSWORD as string,
          {
              host: 'localhost',      
              dialect: 'postgres', 
              models: [__dirname + 'models']
          }
);