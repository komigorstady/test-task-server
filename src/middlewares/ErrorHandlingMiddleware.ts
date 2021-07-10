/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import ApiError from '../errors/ApiError';

const errorHandler = function (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
): Response {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка!' });
};

export default errorHandler;
