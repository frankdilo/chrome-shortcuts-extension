import { copyUrl } from "../commands/copyUrl.js";
import { duplicateTab } from "../commands/duplicateTab.js";

// Add logging when the background script loads
console.log("Background script loaded");

chrome.commands.onCommand.addListener((command) => {
  // Add logging for command received
  console.log("Command received:", command);

  if (command === "copy-url") {
    copyUrl();
  } else if (command === "duplicate-tab") {
    duplicateTab();
  }
});
