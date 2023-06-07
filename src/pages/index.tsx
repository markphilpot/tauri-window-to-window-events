import React from "react";
import { Inter } from "next/font/google";
import ClientOnlySuspense from "@/components/ClientOnlySuspense";

const CreateWindowButton = React.lazy(
  () => import("@/components/CreateWindowButton")
);

const MessageReceiver = React.lazy(
  () => import("@/components/MessageReceiver")
);

const SendMessageButton = React.lazy(
  () => import("@/components/SendMessageButton")
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>main</div>
      <ClientOnlySuspense>
        <MessageReceiver />
        <CreateWindowButton />
        <SendMessageButton label="main" payload="Message from main" />
      </ClientOnlySuspense>
    </main>
  );
}
