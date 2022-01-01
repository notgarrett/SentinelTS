import { Command } from '../../interfaces';
import { Users } from '../../functions/usersObject';

export const command: Command = {
  name: 'ping',
  aliases: ['p'],
  run: async (client, message, args) => {
    message.channel.send('Pinged!');
    console.log(await Users.getUser({ DiscordId: 'Poop' }));
  },
};
