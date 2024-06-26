import { model } from 'mongoose';
import { Verification } from '../../interfaces';
import { verificationModel } from '../../models';
import { Request, Response } from 'express';

const VerificationModel = model<Verification>(
  'Verification',
  verificationModel
);

export const getVerificationProfiles = (req: Request, res: Response) => {
  const query = req.body || {};
  res.send(VerificationModel.find(query));
};
