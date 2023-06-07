import React from "react";
import useTauri from "@/hooks/useTauri";

export default function SendMessageButton(props: {
  label: string;
  payload: string;
}) {
  const { label, payload } = props;

  const { sendMessage } = useTauri();

  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => {
        sendMessage("event", payload, label);
      }}
    >
      Send Message to {label}
    </button>
  );
}
