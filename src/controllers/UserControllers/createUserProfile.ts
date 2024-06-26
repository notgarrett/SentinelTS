import { model } from 'mongoose';
import { User } from '../../interfaces';
import { userModel } from '../../models';
import { Embeds } from '../../embeds/embeds';
import { client } from '../../index';

import { Request, Response } from 'express';

const UserModel = model<User>('User', userModel);

export const createUserProfile = (req: Request, res: Response) => {
  if (!req.body) return res.sendStatus(404);
  const query: any = req.body;

  UserModel.updateOne(
    { DiscordId: query.DiscordId },
    { RobloxId: query.RobloxId, RobloxUserName: query.RobloxUserName },
    { upsert: true },
    (err: any, doc: object) => {
      if (err) throw err;
      if (doc) res.send(doc);
    }
  );

  client.users
    .fetch(query.DiscordId)
    .then((user) => {
      let response = new Embeds(user);
      response.success(
        'Verified!',
        `You have been verified as ${query.RobloxUserName}`
      );
    })
    .catch(console.error);

  const guild = client.guilds.resolve('518686827096440832');
  console.log(guild);
  if (!guild) return;

  let verifiedRole = guild.roles.cache.find((r) => r.name === 'VERIFIED');
  let unverifiedRole = guild.roles.cache.find((r) => r.name === 'VERIFYING');

  let member = guild.members.resolve(`${query.DiscordId}`);
  if (!member) return;
  console.log(member);

  if (verifiedRole)
    member.roles.add(verifiedRole).catch((err) => {
      console.log(err);
    });

  if (unverifiedRole)
    member.roles.remove(unverifiedRole).catch((err) => {
      console.log(err);
    });
};
