import { Command } from '../../interfaces';
import { pointsIncrease } from '../../functions/solidusFunctions/pointsIncrease';
import { securityCheck } from '../../functions/commandAdmin';

export const command: Command = {
  name: 'defencelosshost',
  aliases: [''],
  run: async (client, message, args) => {
    if (!(await securityCheck(message, 2))) return;
    for (let i in args) {
      await pointsIncrease(3, args[i], message);
    }
  },
};
