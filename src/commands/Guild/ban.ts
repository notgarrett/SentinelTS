import { Command } from '../../interfaces';
import { Users } from '../../functions/usersObject';
import { RAPI } from '../../functions';
import { Embeds } from '../../embeds/embeds';

export const command: Command = {
  name: 'ban',
  aliases: ['b'],
  run: async (client, message, args) => {
    const channelMessage = new Embeds(message.channel);

    console.log(args[0]);
    if (!args[0]) {
      return channelMessage.failure('Command failed.', 'Missing arguments.');
    }

    /*
      const empyria = 'empyria';
      const elysium = 'elysium';
      const universe = 'universe';
      */

    const robloxUser: any = await RAPI.getId(args[0]);
    if (!robloxUser)
      return channelMessage.failure('Failed.', 'That user does not exist.');
    else return channelMessage.success('WOOH.', `F ${robloxUser.Username}`);
  },
};
