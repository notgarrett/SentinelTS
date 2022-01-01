import { model } from 'mongoose';
import { Verification } from '../../interfaces';
import { verificationModel } from '../../models';

const VerificationModel = model<Verification>('User', verificationModel);

export const getVerificationProfiles = (req: any, res: any) => {
  const query = req.body || {};
  res.send(VerificationModel.find(query));
};
