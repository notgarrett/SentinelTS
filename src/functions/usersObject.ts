import { model } from 'mongoose';
import { User } from '../interfaces';
import { userModel } from '../models';

const UserModel = model<User>('User', userModel);
//Not sure if I am using this yet.
export class Users {
  static async getUsers(query: object) {
    return UserModel.find(query);
  }

  static async getUser(query: object) {
    return UserModel.findOne(query);
  }

  static async deleteUser(query: object) {
    return UserModel.deleteOne(query);
  }

  static async updateUser(query: object, update: object) {
    return UserModel.updateOne(query, update);
  }

  static async uupdateAndSaveUser(query: object, update: object) {
    return UserModel.updateOne(query, update, { upsert: true });
  }

  static async addRoles(query: object, roles: any) {
    console.log(typeof roles);
    return UserModel.updateOne(query, { $push: { Roles: roles } });
  }

  static async removeRoles(query: object, roles: any) {
    return UserModel.updateOne(query, { $pullAll: { Roles: roles } });
  }
}
