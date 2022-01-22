import { Schema } from 'mongoose';
import { User } from '../interfaces';

export const userModel = new Schema<User>({
  DiscordId: {
    type: String,
    required: true,
  },
  RobloxUserName: {
    type: String,
  },
  RobloxId: {
    type: String,
    required: true,
  },
  Roles: {
    type: Array,
  },
});
