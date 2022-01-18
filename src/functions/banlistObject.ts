import { model } from 'mongoose';
import { Banlist } from '../interfaces';
import { banlistModel } from '../models';

const BanlistModel = model<Banlist>('Banlist', banlistModel);

export class banlist {
  static async add(query: any) {
    return BanlistModel.updateOne(
      { query },
      { RobloxId: query.RobloxId, Empyria: true },
      { upsert: true }
    );
  }

  static async remove(query: any) {
    return BanlistModel.updateOne(
      { query },
      { RobloxId: query.RobloxId, Empyria: false },
      { upsert: true }
    );
  }
}
