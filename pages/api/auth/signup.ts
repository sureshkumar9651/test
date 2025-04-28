import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    // Mock signup
    res.status(201).json({ message: "User created" });
  } else {
    res.status(405).end();
  }
}
