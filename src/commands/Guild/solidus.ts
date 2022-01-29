import { Command } from '../../interfaces';
import { Embeds } from '../../embeds/embeds';
import { Users } from '../../functions';
import table from '../../functions/tables/SolidusTable.json';

export const command: Command = {
  name: 'solidus',
  aliases: ['s', 'sol'],
  run: async (client, message, args) => {
    const serverResponse = new Embeds(message.channel);
    const discordId = message.member?.id;
    const profile: any = await Users.getUser({ DiscordId: discordId });
    let solidus: number = profile.Solidus || 0;
    let name: string = 'L1';

    const userName: string = profile.RobloxUserName || 'NoName';
    let count: number = 0;

    for (let i in table) {
      count = table[i].value;
      name = table[i].name;
      if (solidus < table[i].value) break;
    }

    serverResponse.solidus(userName, solidus, count, name);
  },
};
