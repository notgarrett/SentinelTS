import mongoose from 'mongoose';
import { userModel } from '../models';
import { User } from '../interfaces';

const User = mongoose.model<User>('Users', userModel);

export const addRoles = async (role: any, member: any) => {
  //console.log(role);
  //console.log(typeof role);
  // console.log(Number(member.user.id));
  const data = await User.updateOne(
    { DiscordId: member.user.id },
    { $push: { Roles: role } }
  );
  console.log(data);
  if (data) return data;
};

export const removeRoles = async (role: any, member: any) => {
  //console.log(role);
  const data = await User.updateOne(
    { DiscordId: member.user.id },
    { $pullAll: { Roles: role } }
  );
  if (data) return data;
};
