import { Command } from '../../interfaces';
import { RAPI } from '../../functions';
import { Embeds } from '../../embeds/embeds';
import { checkBotAdmin } from '../../functions/commandAdmin';

export const command: Command = {
  name: 'ban',
  aliases: ['b'],
  run: async (client, message, args) => {
    const channelMessage = new Embeds(message.channel);

    if (!checkBotAdmin(message))
      return channelMessage.failure(
        'Missing Permissions',
        'You do not have permission to use that command.'
      );

    console.log(args[0]);
    if (!args[0]) {
      return channelMessage.failure('Command failed.', 'Missing arguments.');
    }

    const robloxUser: any = await RAPI.getProfileByUsername(args[0]);
    if (!robloxUser)
      return channelMessage.failure('Failed.', 'That user does not exist.');
  },
};
