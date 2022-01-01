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
});

verificationModel.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });
