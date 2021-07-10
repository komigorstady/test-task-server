import { Model, DataTypes } from 'sequelize';
import db from '../db';

interface ImgAttributes {
  id: number;
  fileSizeBytes: number;
  url: string;
}

class Img extends Model <ImgAttributes> {}

Img.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  fileSizeBytes: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
},
{
  sequelize: db,
  tableName: 'images',
});

export default Img;
