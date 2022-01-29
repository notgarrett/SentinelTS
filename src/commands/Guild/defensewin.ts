import { Command } from '../../interfaces';
import { pointsIncrease } from '../../functions/solidusFunctions/pointsIncrease';

export const command: Command = {
  name: 'defencewin',
  aliases: [''],
  run: async (client, message, args) => {
    for (let i in args) {
      await pointsIncrease(6, args[i], message);
    }
  },
};
