# tauri-window-to-window

Sample project demonstrating trying to send messages between windows.

# Instructions

```
pnpm i
pnpm tauri:dev
```

# Steps

1. In `main` window, click button to create a new window
2. In `test` window, click button to send message back to main window

# Expectations

The `main` window should receive the messages and display them

# Results

No messages are received in the `main` window. Note that from the `main` window I can send messages to itself and they are received and displayed
