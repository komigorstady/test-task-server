import { Request, Response, NextFunction } from 'express';
import path from 'path';
import Jimp from 'jimp';
import { v4 }  from 'uuid';
import Img from '../models/imgModel';
import apiService from '../service/apiService';
import ApiError from '../errors/ApiError'

interface Resize {
  height: number;
  width: number;
}

interface SortParms {
  height?: number;
  width?: number;
}

class ImgController {
  async dogUpload(req: Request, res: Response, next: NextFunction) {
    try {
      const { height , width }: Resize = req.body;    
      const dogImmage = await apiService.getDogApi();
      const fileName = v4() + '.jpg'
      const bufImage = await Jimp.read(dogImmage.url)
      bufImage.resize(width, height).write(path.resolve(__dirname, '..' ,  'static', fileName)); // 
      const resImage = await Img.create({imgName: fileName, width: width, height});
      
      return res.json(resImage);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async dogList(req: Request, res: Response, next: NextFunction) {
    const { height , width }: SortParms = req.query;
    
    let images;
    if (height && !width) {
      images = await Img.findAll({where:{ height }});
    }
    if(width && !height ) {
      images = await Img.findAll({ where:{ width}});
    } 
    if(width && height ) {
      images = await Img.findAll({where:{ width, height }});
    } 
    if(!width && !height ) {
      images = await Img.findAll({where:{}});
    } 
    res.json(images)
  }
}

export default new ImgController();
