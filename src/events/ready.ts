import { Event } from '../interfaces';

export const event: Event = {
  name: 'ready',
  run: (client) => {
    if (client.user) console.log(`${client.user.tag} is online.`);
  },
};
