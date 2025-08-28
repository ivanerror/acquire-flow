"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { mockGeminiApiCall } from "@/lib/api";
import { DialogClose } from "@radix-ui/react-dialog";

const Icon = ({ name, className }) => <span className={`inline-block w-5 h-5 ${className}`}>{name.charAt(0)}</span>;
const Sparkles = (props) => <Icon name="Sparkles" {...props} />;

export function BuyerProfileModal({ profile, onClose, isOpen }) {
  const [summary, setSummary] = useState(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);

  const handleSummarize = async () => {
    setIsLoadingSummary(true);
    const response = await mockGeminiApiCall(profile.thesis, "summarizeThesis");
    setSummary(response.summary);
    setIsLoadingSummary(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {profile.title} #{profile.id}
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm font-semibold text-blue-600">{profile.industry}</p>
        <div className="my-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">Available Capital</p>
          <p className="text-2xl font-semibold">{profile.capital}</p>
        </div>
        <div className="my-6">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-lg">Investment Thesis</h4>
            <Button onClick={handleSummarize} disabled={isLoadingSummary} variant="secondary" size="sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Summarize Thesis
            </Button>
          </div>
          {isLoadingSummary ? (
            <div className="text-center p-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current mx-auto"></div>
            </div>
          ) : summary ? (
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-md space-y-2">
              {summary.map((point, index) => (
                <p key={index} className="text-sm text-slate-700 dark:text-slate-300">
                  - {point}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{profile.thesis}</p>
          )}
        </div>
        <div className="my-6">
          <h4 className="font-bold text-lg mb-2">Detailed Criteria</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {Object.entries(profile.criteria).map(([key, value]) => (
              <div key={key} className="bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                <strong className="capitalize">{key}:</strong> {value}
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
