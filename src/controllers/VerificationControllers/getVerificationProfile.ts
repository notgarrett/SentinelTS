import { model } from 'mongoose';
import { Verification } from '../../interfaces';
import { verificationModel } from '../../models';
import { Request, Response } from 'express';

const VerificationModel = model<Verification>(
  'Verification',
  verificationModel
);

export const getVerificationProfile = (req: Request, res: Response) => {
  const query = req.params;
  VerificationModel.findOne(query, (err: any, docs: any) => {
    if (err) throw err;
    if (docs) return res.send(docs);
    else return res.sendStatus(401);
  });
};
