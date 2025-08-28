// app/(auth)/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AcquireFlowLogo } from "@/components/ui/acquire-flow-logo";

export default function RoleSelectionPage() {
  const router = useRouter();

  const handleSelectRole = (role) => {
    // Save to localStorage to be accessed on the onboarding page
    localStorage.setItem("userType", role);
    router.push("/onboarding");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="text-center p-8 max-w-md w-full">
        <AcquireFlowLogo className="h-10 mx-auto mb-6 text-slate-900 dark:text-slate-50" />
        <h1 className="text-4xl font-bold mb-2">Welcome to AcquireFlow</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Connecting business buyers and sellers, intelligently.</p>
        <div className="space-y-4">
          <Button onClick={() => handleSelectRole("seller")} className="w-full text-lg py-6">
            I'm a Seller
          </Button>
          <Button onClick={() => handleSelectRole("buyer")} variant="secondary" className="w-full text-lg py-6">
            I'm a Buyer
          </Button>
        </div>
      </div>
    </div>
  );
}
