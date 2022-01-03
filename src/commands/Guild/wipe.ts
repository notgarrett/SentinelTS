import { Command } from '../../interfaces';
import { Users } from '../../functions';

export const command: Command = {
  name: 'wipe',
  aliases: ['w'],
  run: async (client, message, args) => {
    message.channel.send('Pinged!');
    console.log(await Users.getUser({ DiscordId: 'Poop' }));
  },
};
