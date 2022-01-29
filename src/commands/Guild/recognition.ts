import { Command } from '../../interfaces';
import { pointsIncrease } from '../../functions/solidusFunctions/pointsIncrease';

export const command: Command = {
  name: 'recognition',
  aliases: [''],
  run: async (client, message, args) => {
    for (let i in args) {
      await pointsIncrease(2, args[i], message);
    }
  },
};
