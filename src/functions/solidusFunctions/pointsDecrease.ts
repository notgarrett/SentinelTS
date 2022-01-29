import mongoose from 'mongoose';
import { userModel } from '../../models';
import { User } from '../../interfaces';
import { Message } from 'discord.js';
import { Embeds } from '../../embeds/embeds';
import { RAPI } from '../robloxObject';

const UserModel = mongoose.model<User>('Users', userModel);

export const pointsDecrease = async (
  number: number,
  RobloxUserName: string,
  message: Message
) => {
  const serverResponse = new Embeds(message.channel);

  const robloxId: any = await RAPI.getProfileByUsername(RobloxUserName);

  if (!robloxId)
    return serverResponse.warn(
      'Invalid username.',
      `${RobloxUserName} is not a valid Roblox user.`
    );

  UserModel.updateOne(
    { RobloxId: robloxId },
    { $inc: { Solidus: -number } },
    { upsert: true }
  );

  serverResponse.success('Nicu', 'AMERICA');
};
