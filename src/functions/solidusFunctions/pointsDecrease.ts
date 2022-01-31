import { Message } from 'discord.js';
import { Embeds } from '../../embeds/embeds';
import { RAPI } from '../robloxObject';
import { Users } from '../usersObject';

export const pointsDecrease = async (
  number: number,
  RobloxUserName: string,
  message: Message
) => {
  const serverResponse = new Embeds(message.channel);

  const robloxProfile: any = await RAPI.getProfileByUsername(RobloxUserName);
  if (!robloxProfile)
    return serverResponse.failure(
      'Invalid User',
      'Roblox user does not exist.'
    );

  if (!(await Users.getUser({ RobloxId: robloxProfile.Id })))
    return serverResponse.failure(
      'Invalid User',
      'User is  not in the database.'
    );

  await Users.updateUser(
    { RobloxId: robloxProfile.Id },
    { $inc: { Solidus: -number } }
  );

  let solidusCount = robloxProfile.Solidus || 0;

  solidusCount += -number;

  serverResponse.success(
    'Solidus removed!',
    `${robloxProfile.Username}'s Solidus has been decreased to ${solidusCount}.`
  );
};
