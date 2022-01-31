import { Command } from '../../interfaces';
import { RAPI } from '../../functions';
import { Embeds } from '../../embeds/embeds';
import { securityCheck } from '../../functions/commandAdmin';
import { banlist } from '../../functions/banlistObject';

export const command: Command = {
  name: 'unban',
  aliases: ['ub'],
  run: async (client, message, args) => {
    if (!(await securityCheck(message, 3))) return;

    const channelMessage = new Embeds(message.channel);

    console.log(args[0]);
    if (!args[0]) {
      return channelMessage.failure('Command failed.', 'Missing arguments.');
    }

    const robloxUser: any = await RAPI.getProfileByUsername(args[0]);
    if (!robloxUser)
      return channelMessage.failure('Failed.', 'That user does not exist.');

    await banlist.remove(robloxUser.Id);
  },
};
