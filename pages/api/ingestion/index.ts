import { NextApiRequest, NextApiResponse } from 'next';

const mockIngestionStatus = [
  { id: "ingest1", documentId: "doc1", status: "Completed" },
  { id: "ingest2", documentId: "doc2", status: "Processing" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(mockIngestionStatus);
  } else {
    res.status(405).end();
  }
}
