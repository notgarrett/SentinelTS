import { model } from 'mongoose';
import { User } from '../interfaces';
import { userModel } from '../models';

const UserModel = model<User>('User', userModel);

export const getUser = async (query: object) => {
  return new Promise((resolve) => {
    UserModel.findOne(query, (err: any, doc: object | boolean) => {
      if (err) throw err;
      if (doc) resolve(doc);
      else resolve(false);
    });
  });
};
