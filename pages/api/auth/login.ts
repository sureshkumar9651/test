import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    // Mock login success
    res.status(200).json({
      id: "1",
      name: "Mock Admin",
      role: "admin",
      email,
    });
  } else {
    res.status(405).end();
  }
}
