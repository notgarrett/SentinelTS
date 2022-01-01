import { model } from 'mongoose';
import { Verification } from '../interfaces';
import { verificationModel } from '../models';
import { randomBytes } from 'crypto';

const VerificationModel = model<Verification>(
  'Verification',
  verificationModel
);

export const generateVerification = async (DiscordId: String) => {
  return new Promise((resolve) => {
    if (!DiscordId) resolve(false);
    const newVerification = new VerificationModel({
      DiscordId: DiscordId,
      VerificationKey: randomBytes(10).toString('hex'),
    });

    newVerification.save((err, newVerification) => {
      if (err) console.error(err);
      resolve(newVerification);
    });
  });
};
