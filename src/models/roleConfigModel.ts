import { Schema } from 'mongoose';
import { RoleConfig } from '../interfaces';

export const roleConfigModel = new Schema<RoleConfig>({
  RoleId: {
    type: String,
    required: true,
  },
  Security: {
    type: Number,
    default: 0,
  },
});
