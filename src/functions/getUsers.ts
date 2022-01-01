import { model } from 'mongoose';
import { User } from '../interfaces';
import { userModel } from '../models';

const UserModel = model<User>('User', userModel);

export const getUsers = async (query: object) => {
  return new Promise((resolve, reject) => {
    UserModel.find(query, (err: any, doc: Array<object>) => {
      if (err) throw err;
      if (doc) resolve(doc);
      else resolve(false);
    });
  });
};
