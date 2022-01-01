import { Schema } from 'mongoose';
import { Banlist } from '../interfaces';

export const banlistModel = new Schema<Banlist>({
  RobloxId: {
    type: String,
    required: true,
  },
  Empyria: {
    type: Boolean,
  },
  Elysium: {
    type: Boolean,
  },
  Universe: {
    type: Boolean,
  },
});
