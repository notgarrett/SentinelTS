import { Command } from '../../interfaces';
import { Embeds } from '../../embeds/embeds';

import mongoose from 'mongoose';
import { userModel } from '../../models';
import { User } from '../../interfaces';
import { client } from '../../index';

const UserModel = mongoose.model<User>('Users', userModel);

export const command: Command = {
  name: 'fix',
  aliases: ['f'],
  run: async (client, message, args) => {
    const serverResponse = new Embeds(message.channel);
    serverResponse.notification(
      'This will take a while.',
      'Please be patient.'
    );

    let arr = [];

    const guild = client.guilds.resolve('518686827096440832');
    if (!guild) return;

    guild.members.fetch().then((members) => {
      members.forEach((member) => {
        console.log(member);
      });
    });
  },
};
