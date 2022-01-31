import { model } from 'mongoose';
import { RoleConfig } from '../interfaces';
import { roleConfigModel } from '../models';
import { Message } from 'discord.js';
import { Embeds } from '../embeds/embeds';

const RoleConfigModel = model<RoleConfig>('RoleConfig', roleConfigModel);

const roleName = 'Guardian';

export const checkBotAdmin = (msg: any) => {
  return !!msg.member.roles.cache.find((r: any) => r.name === roleName);
};

export const securityCheck = async (message: Message, number: number) => {
  const list: any = RoleConfigModel.find({});
  let level: number = 0;
  for (let i in list) {
    const id = list[i].RoleId;
    if (await message.member?.roles.resolveId(id)) {
      if (list[i].Security > level) level = list[i].Security;
      if (level === 3) return true;
    }
  }
  if (level >= number) return true;

  const serverResponse = new Embeds(message.channel);
  serverResponse.failure(
    'Missing Permissions.',
    'You do not have permission to use that command.'
  );
  return false;
};
