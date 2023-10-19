import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import validateUser from '@/server/db/validate-user';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {

    const { username, password } = req.body;
    const valid = await validateUser({ username, password });

    if (valid) {
      const token = jwt.sign({ username, password }, process.env.JWT_SECRET_KEY!, {
        expiresIn: '1h',
      });

      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};