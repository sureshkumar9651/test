"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

type Answer = {
  id: string;
  question: string;
  answer: string;
  excerpts: string[];
};

export default function QAInterfacePage() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);

    // Mock API response
    setTimeout(() => {
      const mockAnswer: Answer = {
        id: (answers.length + 1).toString(),
        question: question,
        answer: `This is a generated answer for: "${question}"`,
        excerpts: [
          "Document Excerpt 1 related to the question.",
          "Document Excerpt 2 providing more details.",
        ],
      };

      setAnswers((prev) => [mockAnswer, ...prev]);
      setQuestion("");
      setLoading(false);
    }, 2000); // Mock 2 seconds delay
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6">Ask Your Questions</h1>

          {/* Ask a Question */}
          <div className="bg-white p-6 rounded shadow mb-8">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full border p-3 rounded mb-4"
              rows={4}
            />

            <button
              onClick={handleAskQuestion}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              {loading ? "Getting Answer..." : "Ask"}
            </button>
          </div>

          {/* Display Answers */}
          <div className="space-y-6">
            {answers.map((ans) => (
              <div key={ans.id} className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-2">Q: {ans.question}</h2>
                <p className="text-gray-800 mb-4">A: {ans.answer}</p>

                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="font-semibold mb-2">Relevant Document Excerpts:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {ans.excerpts.map((ex, index) => (
                      <li key={index}>{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
