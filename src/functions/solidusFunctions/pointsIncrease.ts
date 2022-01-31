import { Message } from 'discord.js';
import { Embeds } from '../../embeds/embeds';
import { RAPI } from '../robloxObject';
import { Users } from '../usersObject';

export const pointsIncrease = async (
  number: number,
  RobloxUserName: string,
  message: Message
) => {
  const serverResponse = new Embeds(message.channel);

  const robloxProfile: any = await RAPI.getProfileByUsername(RobloxUserName);

  if (!robloxProfile)
    return serverResponse.warn(
      'Invalid username.',
      `${RobloxUserName} is not a valid Roblox user.`
    );

  const profile: any = await Users.getUser({ RobloxId: robloxProfile.Id });

  if (!profile)
    return serverResponse.failure(
      'User is not in the database.',
      `${RobloxUserName} is not in the database.`
    );

  await Users.updateUser(
    { RobloxId: robloxProfile.Id },
    { $inc: { Solidus: number } },
    { upsert: true }
  );

  serverResponse.success(
    'Success',
    `${RobloxUserName} has been awarded ${number} Solidus!`
  );
};
