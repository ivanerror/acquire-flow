"use client";

import { useState } from "react";
import { dummyChats, chatHistory } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Placeholder Icon
const Send = ({ className }) => <span className={className}>&gt;</span>;

export default function MessagesPage() {
  const [chats, setChats] = useState(dummyChats);
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  if (!selectedChat) {
    return <div>Loading chats...</div>;
  }

  const currentChatHistory = chatHistory[selectedChat.id];

  return (
    <div className="flex h-full">
      {/* Chat List */}
      <div className="w-1/3 border-r border-slate-200 dark:border-slate-800 flex flex-col">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold">Messages</h2>
        </div>
        <div className="flex-grow overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 cursor-pointer flex items-center space-x-3 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                selectedChat.id === chat.id ? "bg-slate-100 dark:bg-slate-800" : ""
              }`}
            >
              <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center font-bold text-slate-600">
                {chat.avatar}
              </div>
              <div className="flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold truncate">{chat.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">{chat.timestamp}</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message View */}
      <div className="w-2/3 flex flex-col h-full">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center font-bold text-slate-600">
            {selectedChat.avatar}
          </div>
          <div>
            <h3 className="font-semibold">{selectedChat.name}</h3>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
        <div className="flex-grow p-6 overflow-y-auto space-y-4">
          {currentChatHistory.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                  msg.sender === "You" ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-700"
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === "You" ? "text-blue-200" : "text-slate-500 dark:text-slate-400"} text-right`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="relative">
            <Input placeholder="Type a message..." className="pr-12" />
            <Button size="icon" className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
