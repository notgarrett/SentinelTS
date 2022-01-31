import { Command } from '../../interfaces';
import { Embeds } from '../../embeds/embeds';
import { pointsIncrease } from '../../functions/solidusFunctions/pointsIncrease';
import { securityCheck } from '../../functions/commandAdmin';

export const command: Command = {
  name: 'addsolidus',
  aliases: [''],
  run: async (client, message, args) => {
    if (!(await securityCheck(message, 2))) return;

    const serverResponse = new Embeds(message.channel);

    if (!args[0] || !args[1] || !Number(args[1]))
      return serverResponse.failure(
        'Invalid arguments.',
        'Please insert a username after the command.'
      );
    await pointsIncrease(Number(args[1]), args[0], message);
  },
};
