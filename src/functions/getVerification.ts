import { model } from 'mongoose';
import { Verification } from '../interfaces';
import { verificationModel } from '../models';

const VerificationModel = model<Verification>(
  'Verification',
  verificationModel
);

export const getVerification = async (query: object) => {
  return new Promise((resolve) => {
    VerificationModel.findOne(query, (err: any, doc: object | boolean) => {
      if (err) throw err;
      if (doc) resolve(doc);
      else resolve(false);
    });
  });
};
