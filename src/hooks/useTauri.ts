import { useCallback } from "react";
import { WebviewWindow, WindowOptions } from "@tauri-apps/api/window";

export default function useTauri() {
  const createWindow = useCallback(
    (url: string, label: string, options: WindowOptions) => {
      const webview = new WebviewWindow(label, {
        url,
        ...options,
      });
    },
    []
  );

  const sendMessage = useCallback(
    (event: string, payload: string, label: string) => {
      console.log("Sending message to ", label);
      const webview = WebviewWindow.getByLabel(label);
      if (webview) {
        webview.emit(event, payload);
      } else {
        console.error("Webview not found");
      }
    },
    []
  );

  return {
    createWindow,
    sendMessage,
  };
}
