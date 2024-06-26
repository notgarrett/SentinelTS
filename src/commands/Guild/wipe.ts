import { Command } from '../../interfaces';
import { Users } from '../../functions';
import { RAPI } from '../../functions';
import { Embeds } from '../../embeds/embeds';
import { securityCheck } from '../../functions/commandAdmin';

export const command: Command = {
  name: 'wipe',
  aliases: ['w'],
  run: async (client, message, args) => {
    if (!(await securityCheck(message, 3))) return;
    const response = new Embeds(message.channel);

    const robloxProfile: any = await RAPI.getProfileByUsername(args[0]);
    if (!robloxProfile)
      return response.failure(
        'Roblox User Does not exist.',
        'The user you entered does not exist on Roblox.'
      );

    const id = robloxProfile.Id;

    const profile: any = await Users.getUser({ RobloxId: id });
    if (!profile)
      return response.failure(
        'Database profile does not exist.',
        'The user you entered does not exist in the database.'
      );

    await Users.deleteUser({ RobloxId: id });
    response.notification(
      `${robloxProfile.Username} was wiped.`,
      'Successfully wiped user from database.'
    );
  },
};
