import { Command } from '../../interfaces';
import { model } from 'mongoose';
import { User } from '../../interfaces';
import { userModel } from '../../models';
import { Embeds } from '../../embeds/embeds';
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
    const serverResponse = new Embeds(message.channel);
    if (!(await securityCheck(message, 3))) return;

    serverResponse.notification('Process started.', 'Give us a moment.');
    const docs = await UserModel.find({});
    console.log(docs.length);
    let count = 0;
    for (let i in docs) {
      console.log(i);
      const profile = docs[i];
      if (!profile) continue;
      let discordId = profile.DiscordId;
      if (!discordId) continue;
      let exists = await message.guild?.members
        .fetch(discordId)
        .catch((err) => {
          return false;
        });
      if (exists) {
        console.log(profile.RobloxUserName + ' Exists!');
      } else {
        console.log(profile.RobloxUserName + ' Does not!');
        count++;
        await UserModel.deleteOne({ DiscordId: discordId });
      }

      serverResponse.success('Process finished.', `${count} users wiped.`);
    }
  },
};
