import { Command } from '../../interfaces';
import { Embeds } from '../../embeds/embeds';
import { Users } from '../../functions';
import { RAPI } from '../../functions';

export const command: Command = {
  name: 'removesolidus',
  aliases: [''],
  run: async (client, message, args) => {
    const serverResponse = new Embeds(message.channel);

    if (!args[0] || !args[1] || !Number(args[1]))
      return serverResponse.failure(
        'Invalid arguments.',
        'Please insert a username after the command.'
      );

    const robloxProfile: any = await RAPI.getProfileByUsername(args[0]);
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
      { $inc: { Solidus: -args[1] } }
    );

    let solidusCount = robloxProfile.Solidus || 0;

    solidusCount += -args[1];

    serverResponse.success(
      'Solidus wiped!',
      `${robloxProfile.Username}'s Solidus has been set to ${solidusCount}.`
    );
  },
};
