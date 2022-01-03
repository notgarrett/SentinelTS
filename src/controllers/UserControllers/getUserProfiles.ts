import { model } from 'mongoose';
import { User } from '../../interfaces';
import { userModel } from '../../models';
import { Request, Response } from 'express';

const UserModel = model<User>('User', userModel);

export const getUserProfiles = (req: Request, res: Response) => {
  const query = req.body || {};
  res.send(UserModel.find(query));
};
