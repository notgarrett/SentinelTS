import { Command } from '../../interfaces';
import { model } from 'mongoose';
import { User } from '../../interfaces';
import { userModel } from '../../models';
import { RAPI } from '../../functions';
import { securityCheck } from '../../functions/commandAdmin';

const UserModel = model<User>('User', userModel);

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const command: Command = {
  name: 'hotfix',
  aliases: [''],
  run: async (client, message) => {
    if (!(await securityCheck(message, 3))) return;

    const docs = await UserModel.find({});
    console.log(docs.length);
    for (let i in docs) {
      console.log(i);
      const profile = docs[i];
      if (!profile) continue;
      let discordId = profile.DiscordId;
      if (!discordId) continue;
      let exists = await message.guild?.members.resolveId(discordId);
      if (exists) {
        console.log(profile.RobloxUserName + ' Exists!');
      } else {
        console.log(profile.RobloxUserName + ' Does not!');
        //await UserModel.deleteOne({ DiscordId: discordId });
      }
    }
  },
};
