// components/seller-dashboard.jsx
"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buyerProfiles } from "@/lib/data";
import { BuyerProfileCard } from "@/components/buyer-profile-card";
import { BuyerProfileModal } from "@/components/buyer-profile-modal";

// Placeholder Icons
const Icon = ({ name, className }) => <span className={`inline-block ${className}`}>{name}</span>;
const X = (props) => <Icon name="X" {...props} />;
const Check = (props) => <Icon name="✓" {...props} />;

export function SellerDashboard() {
  const [profiles, setProfiles] = useState(buyerProfiles);
  const [activeProfileId, setActiveProfileId] = useState(null);
  const currentProfile = useMemo(() => profiles[0], [profiles]);

  const handleDecision = (decision) => {
    if (!currentProfile) return;
    const card = document.getElementById(`profile-card-${currentProfile.id}`);
    if (card) card.classList.add(decision === "accept" ? "accepting" : "rejecting");
    setTimeout(() => setProfiles((prev) => prev.slice(1)), 500);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-1 text-center">Discover Potential Buyers</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-6 text-center">Review profiles of buyers interested in businesses like yours.</p>
      <div className="relative w-full max-w-md mx-auto h-[550px]">
        {profiles.length > 0 ? (
          profiles
            .map((profile, index) => (
              <BuyerProfileCard
                key={profile.id}
                profile={profile}
                isTop={index === 0}
                index={index}
                onExpand={() => setActiveProfileId(profile.id)}
              />
            ))
            .reverse()
        ) : (
          <Card className="flex items-center justify-center h-full">
            <p className="text-slate-500">No new buyers at the moment.</p>
          </Card>
        )}
      </div>
      {profiles.length > 0 && (
        <div className="flex justify-center items-center space-x-6 mt-6">
          <Button
            variant="outline"
            size="icon"
            className="h-24 w-24 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={() => handleDecision("reject")}
          >
            <X className="h-8 w-8 text-3xl" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-24 w-24 rounded-full border-2 border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
            onClick={() => handleDecision("accept")}
          >
            <Check className="h-10 w-10 text-4xl" />
          </Button>
        </div>
      )}
      {activeProfileId !== null && (
        <BuyerProfileModal profile={currentProfile} onClose={() => setActiveProfileId(null)} isOpen={activeProfileId !== null} />
      )}
    </div>
  );
}
