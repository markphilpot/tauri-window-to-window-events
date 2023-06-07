import useTauri from "@/hooks/useTauri";
import React from "react";

export default function CreateWindowButton() {
  const { createWindow } = useTauri();

  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => {
        createWindow("http://localhost:3000/test", "test", {
          width: 500,
          height: 800,
        });
      }}
    >
      Create Test Window
    </button>
  );
}
