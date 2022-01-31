import { Command } from '../../interfaces';
import { pointsIncrease } from '../../functions/solidusFunctions/pointsIncrease';
import { securityCheck } from '../../functions/commandAdmin';

export const command: Command = {
  name: 'defencewin',
  aliases: [''],
  run: async (client, message, args) => {
    if (!(await securityCheck(message, 1))) return;
    for (let i in args) {
      await pointsIncrease(6, args[i], message);
    }
  },
};
