import { model } from 'mongoose';
import { User } from '../../interfaces';
import { userModel } from '../../models';
import { Request, Response } from 'express';

const UserModel = model<User>('User', userModel);

export const getUserProfile = (req: Request, res: Response) => {
  const query = req.params;
  UserModel.findOne(query, (err: any, docs: any) => {
    if (err) throw err;
    if (docs) return res.send(docs);
    else return res.sendStatus(404);
  });
};
