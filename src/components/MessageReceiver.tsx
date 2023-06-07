import { appWindow } from "@tauri-apps/api/window";
import React, { useEffect, useState } from "react";

export default function MessageReceiver() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    let unlisten: () => void;
    const doWork = async () => {
      unlisten = await appWindow.listen<string>("event", (payload) => {
        console.log("Received Message", appWindow, payload);
        setMessages((prev) => [...prev, payload.payload]);
      });
    };

    doWork();

    return () => {
      unlisten && unlisten();
    };
  }, []);

  return (
    <div>
      <h1 className="mb-4">Messages</h1>
      {messages.length === 0 && <div>No messages received</div>}
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
}
