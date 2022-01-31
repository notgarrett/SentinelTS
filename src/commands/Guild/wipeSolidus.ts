import { Command } from '../../interfaces';
import { Embeds } from '../../embeds/embeds';
import { Users } from '../../functions';
import { RAPI } from '../../functions';
import { securityCheck } from '../../functions/commandAdmin';

export const command: Command = {
  name: 'wipesolidus',
  aliases: [''],
  run: async (client, message, args) => {
    if (!(await securityCheck(message, 2))) return;

    const serverResponse = new Embeds(message.channel);

    if (!args[0])
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
        'User is not in the database.'
      );

    await Users.updateUser({ RobloxId: robloxProfile.Id }, { Solidus: 0 });

    serverResponse.success(
      'Solidus wiped!',
      `${robloxProfile.Username}'s Solidus has been set to 0.`
    );
  },
};
