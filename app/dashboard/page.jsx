// app/dashboard/page.jsx
"use client";

import { useState, useEffect } from "react";
import { SellerDashboard } from "@/components/seller-dashboard";
import { BuyerDashboard } from "@/components/buyer-dashboard";

export default function DashboardPage() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const type = sessionStorage.getItem("userType");
    setUserType(type);
  }, []);

  if (!userType) return <div>Loading...</div>;

  return userType === "seller" ? <SellerDashboard /> : <BuyerDashboard />;
}
