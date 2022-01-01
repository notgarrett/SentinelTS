const code = 'XrR3BN6dhmXBHt5de8YB';

export const security = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[0];
  if (!token) return res.sendStatus(401);
  if (token === code) return next();
  res.sendStatus(401);
};
