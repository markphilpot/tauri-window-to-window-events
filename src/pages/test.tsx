import React from "react";
import ClientOnlySuspense from "@/components/ClientOnlySuspense";
import { Inter } from "next/font/google";

const SendMessageButton = React.lazy(
  () => import("@/components/SendMessageButton")
);

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return (
    <main
      className={`bg:blue flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>test</div>
      <ClientOnlySuspense>
        <SendMessageButton label="main" payload={"Message from test"} />
      </ClientOnlySuspense>
    </main>
  );
}
