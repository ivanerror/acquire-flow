// components/sidebar.jsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AcquireFlowLogo } from "./ui/acquire-flow-logo";
import { Settings, LogOut } from "lucide-react";

export function Sidebar({ activeSection, setActiveSection, navItems }) {
  return (
    <nav className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 flex flex-col">
      <div className="mb-8 px-2">
        <AcquireFlowLogo className="h-8 text-slate-900 dark:text-slate-50" />
      </div>
      <ul className="space-y-1 flex-grow">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.route}>
              <Button
                variant={activeSection === item.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveSection("settings")}>
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
        
        <Link href={"/"}>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 dark:text-red-500 dark:hover:text-red-400"
          onClick={() => window.location.reload()}
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
        </Link>
      </div>
    </nav>
  );
}
