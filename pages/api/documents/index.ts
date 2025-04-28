import { NextApiRequest, NextApiResponse } from 'next';
import { mockDocuments } from '@/lib/mockData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(mockDocuments);
  } else if (req.method === "POST") {
    // pretend we uploaded a document
    res.status(201).json({ message: "Document uploaded successfully" });
  } else {
    res.status(405).end();
  }
}
