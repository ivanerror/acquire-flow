"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function MatchesSection({ setActiveSection }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Matches</h2>
      <Card>
        <CardHeader>
          <CardTitle>Active Deals List</CardTitle>
          <CardDescription>When buyers and sellers match, the acquisition workflow starts here.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/dashboard/matches/123">
            <div className="p-4 border dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
              <h3 className="font-bold text-lg text-blue-600">Deal with "Strategic Buyer B-123"</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Matched 2 days ago</p>
              <Progress value={45} className="mt-2" />
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Current Stage: Due Diligence</p>
            </div>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
