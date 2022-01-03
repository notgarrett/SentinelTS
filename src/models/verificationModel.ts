import { Schema } from 'mongoose';
import { Verification } from '../interfaces';

export const verificationModel = new Schema<Verification>({
  DiscordId: {
    type: String,
    required: true,
  },
  VerificationKey: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, expires: '2m', default: Date.now },
});
