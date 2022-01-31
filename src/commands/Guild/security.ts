import { Command } from '../../interfaces';
import { model } from 'mongoose';
import { RoleConfig } from '../../interfaces';
import { roleConfigModel } from '../../models';
import { Permissions, Snowflake } from 'discord.js';
import { Embeds } from '../../embeds/embeds';

const RoleConfigModel = model<RoleConfig>('RoleConfig', roleConfigModel);

export const command: Command = {
  name: 'security',
  aliases: [''],
  run: async (client, message, args) => {
    if (!message.member?.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
      return;

    const serverResponse = new Embeds(message.channel);

    if (!args[0] || !args[1] || !Number(args[1]))
      return serverResponse.failure(
        'Bad Arguements.',
        'Missing or invalid arguements.'
      );

    let x: Snowflake = args[0];
    let xx = x.toString();
    let xxx = xx.substr(3, xx.length - 4);

    RoleConfigModel.updateOne(
      { RoleId: xxx },
      { Security: Number(args[1]) },
      { upsert: true }
    );

    serverResponse.success(
      'Permissions updated!',
      `Role now has level ${args[1]}`
    );
  },
};
