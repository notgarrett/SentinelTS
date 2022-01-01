import { Schema } from 'mongoose';
import { Clan } from '../interfaces';

export const clanModel = new Schema<Clan>({
  ClanId: {
    type: String,
    required: true,
  },
  Banned: {
    type: 'Boolean',
  },
});
