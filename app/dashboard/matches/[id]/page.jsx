"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check, Sparkles, ChevronUp, UploadCloud, Wand2, Bot, Lightbulb, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { mockGeminiApiCall } from "@/lib/api";
import { Textarea } from "@/components/ui/textarea";

export default function MatchDetailPage({ params }) {
  const [aiState, setAiState] = useState("idle"); // idle, loading, results
  const [aiResults, setAiResults] = useState(null);
  const [draft, setDraft] = useState("");
  const [isDrafting, setIsDrafting] = useState(false);

  const runAiAnalyzer = async () => {
    setAiState("loading");
    const response = await mockGeminiApiCall("analyze these financials", "analyzeFinancials");
    setAiResults(response);
    setAiState("results");
  };

  const handleDraftReply = async () => {
    setIsDrafting(true);
    const response = await mockGeminiApiCall("draft a reply for the last message", "draftReply");
    setDraft(response.draft);
    setIsDrafting(false);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">Acquisition Workflow</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-6">Guiding you from match to closing.</p>
      <div className="space-y-4">
        <Card className="opacity-80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full font-bold">
                  1
                </div>
                <div>
                  <CardTitle>Non-Disclosure Agreement (NDA)</CardTitle>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center">
                    <Check className="w-4 h-4 mr-1" />
                    <span>Completed</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
        </Card>
        <Card className="border-2 border-blue-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full font-bold">
                  2
                </div>
                <div>
                  <CardTitle className="flex items-center">
                    AI-Powered Due Diligence <Sparkles className="w-4 h-4 ml-2 text-blue-500" />
                  </CardTitle>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">In Progress</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <ChevronUp className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Securely upload financial documents. Our AI will analyze them to provide summaries, identify key trends, and flag potential
              risks.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
              {aiState === "idle" && (
                <label htmlFor="doc-upload" className="flex flex-col items-center justify-center p-6 text-center cursor-pointer">
                  <UploadCloud className="h-10 w-10 text-slate-400 mb-2" />
                  <span className="font-semibold text-blue-600">Click to upload & analyze ✨</span>
                  <input id="doc-upload" type="file" className="hidden" onChange={runAiAnalyzer} />
                </label>
              )}
              {aiState === "loading" && (
                <div className="text-center p-6">
                  <Bot className="h-8 w-8 text-blue-500 animate-spin mx-auto mb-3" />
                  <p className="font-semibold">AI is analyzing...</p>
                </div>
              )}
              {aiState === "results" && aiResults && (
                <div>
                  <h4 className="font-bold text-lg mb-3">AI Financial Summary</h4>
                  <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-md mb-4">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Key Insights
                    </h5>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {aiResults.insights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded-md">
                    <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Potential Review Areas
                    </h5>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {aiResults.risks.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Deal Chat Room</h4>
              <div className="border dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800/50">
                <div className="space-y-2 text-sm mb-4 h-24 overflow-y-auto">
                  <p>
                    <strong className="text-blue-600">Buyer:</strong> Thanks for uploading the documents. Could you explain the one-time
                    expenses in Q2?
                  </p>
                  <p className="text-right">
                    <strong className="text-green-600">You:</strong> ...
                  </p>
                </div>
                <div className="relative">
                  <Textarea placeholder="Type your reply..." value={draft} onChange={(e) => setDraft(e.target.value)} rows={3} />
                  <Button
                    onClick={handleDraftReply}
                    disabled={isDrafting}
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-2 right-2"
                  >
                    <Wand2 className="w-4 h-4 mr-2" />
                    Draft Reply
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="opacity-50">
          <CardHeader>
            <CardTitle>3. Negotiation & LOI</CardTitle>
          </CardHeader>
        </Card>
        <Card className="opacity-50">
          <CardHeader>
            <CardTitle>4. Closing & Fund Transfer</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
