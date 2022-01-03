import { Request, Response, NextFunction } from 'express';

const code = 'XrR3BN6dhmXBHt5de8YB';

export const security = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[0];
  if (!token) return res.sendStatus(401);
  if (token === code) return next();
  res.sendStatus(401);
};
