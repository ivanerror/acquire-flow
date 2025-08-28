"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { Rocket, Heart, MessageSquare, UserCircle, Settings, Sun, LogOut } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Rocket, route: "/dashboard" },
  { id: "matches", label: "My Matches", icon: Heart, route: "/dashboard/matches" },
  { id: "messages", label: "Messages", icon: MessageSquare, route: "/dashboard/messages" },
  { id: "profile", label: "My Profile", icon: UserCircle, route: "/dashboard/profile" },
];

export default function DashboardLayout({ children }) {
  const [userType, setUserType] = useState(null);
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  // In a real app, you would get the userType from the login session
  useEffect(() => {
    const type = sessionStorage.getItem("userType");
    setUserType(type);
  }, []);

  return (
    <div className="flex h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} navItems={navItems} />
      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950">{children}</main>
    </div>
  );
}
