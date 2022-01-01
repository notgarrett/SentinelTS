import { model } from 'mongoose';
import { User } from '../../interfaces';
import { userModel } from '../../models';

const UserModel = model<User>('User', userModel);

export const getUserProfiles = (req: any, res: any) => {
  const query = req.body || {};
  res.send(UserModel.find(query));
};
