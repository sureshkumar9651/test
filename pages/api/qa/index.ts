import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { question } = req.body;
    // simple mock response
    res.status(200).json({
      answer: `This is a mock answer to your question: "${question}"`,
      sources: ["Document 1", "Document 2"],
    });
  } else {
    res.status(405).end();
  }
}
