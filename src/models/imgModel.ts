import { Model, DataTypes, Optional } from 'sequelize';
import db from '../db';

interface ImgAttributes {
  id: number;
  imgName: string;
  width: number;
  height: number;
}

interface ImgCreationAttributes extends Optional<ImgAttributes, "id"> {}

class Img extends Model <ImgAttributes, ImgCreationAttributes> {}

Img.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  imgName: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  width: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  }
  
},
{
  sequelize: db,
  tableName: 'images',
});

export default Img;
