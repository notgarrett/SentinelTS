import { model } from 'mongoose';
import { RoleConfig } from '../interfaces';
import { roleConfigModel } from '../models';
import { Message, Permissions } from 'discord.js';
import { Embeds } from '../embeds/embeds';

const RoleConfigModel = model<RoleConfig>('RoleConfig', roleConfigModel);

export const securityCheck = async (message: Message, number: number) => {
  if (message.member?.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
    return true;

  const list: any = await RoleConfigModel.find({});

  for (let i in list) {
    if (!list[i]) continue;
    const id: string = list[i].RoleId;
    if (message.member?.roles.resolve(id)) {
      if (list[i].Security >= number) return true;
    }
  }

  const serverResponse = new Embeds(message.channel);
  serverResponse.failure(
    'Missing Permissions.',
    'You do not have permission to use that command.'
  );
  return false;
};
