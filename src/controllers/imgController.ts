import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import img from '../models/imgModel';
import apiService from '../service/apiService';

class ImgController {
  async dogUpload(req: Request, res: Response) {
    try {
      console.dir(await apiService.getDogApi());
      return res.send('Everything is ok');
    } catch (err) {

    }
  }

  async dogList(req: Request, res: Response, next: NextFunction) {

  }
}

export default new ImgController();
