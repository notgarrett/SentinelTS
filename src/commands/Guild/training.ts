import { Command } from '../../interfaces';
import { pointsIncrease } from '../../functions/solidusFunctions/pointsIncrease';

export const command: Command = {
  name: 'training',
  aliases: [''],
  run: async (client, message, args) => {
    for (let i in args) {
      await pointsIncrease(4, args[i], message);
    }
  },
};
