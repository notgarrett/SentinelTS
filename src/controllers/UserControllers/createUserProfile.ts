import { model } from 'mongoose';
import { User } from '../../interfaces';
import { userModel } from '../../models';

const UserModel = model<User>('User', userModel);

export const createUserProfile = (req: any, res: any) => {
  if (!req.body) return res.sendStatus(404);
  const query: any = req.body;

  UserModel.updateOne(
    { DiscordId: query.DiscordId },
    { RobloxId: query.RobloxId },
    { upsert: true },
    (err: any, doc: object) => {
      if (err) throw err;
      if (doc) res.send(doc);
    }
  );
};
