import { Schema } from 'mongoose';
import { User } from '../interfaces';

export const userModel = new Schema<User>({
  DiscordId: {
    type: String,
    required: true,
  },
  RobloxId: {
    type: String,
    required: true,
  },
  DiscordRoles: {
    type: Array,
  },
});
