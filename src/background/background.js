// Add logging when the background script loads
console.log("Background script loaded");

chrome.commands.onCommand.addListener((command) => {
  // Add logging for command received
  console.log("Command received:", command);

  if (command === "copy-url") {
    console.log("Copy URL command triggered");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("Current tab:", tabs[0]);
      const currentUrl = tabs[0].url;

      // Execute script in the current tab to copy to clipboard
      chrome.scripting
        .executeScript({
          target: { tabId: tabs[0].id },
          func: (text) => {
            navigator.clipboard.writeText(text);
          },
          args: [currentUrl],
        })
        .then(() => {
          console.log("URL successfully copied to clipboard");
          // Optional: Show notification that URL was copied
          chrome.action.setBadgeText({ text: "✓" });
          setTimeout(() => {
            chrome.action.setBadgeText({ text: "" });
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy URL:", err);
        });
    });
  } else if (command === "duplicate-tab") {
    console.log("Duplicate tab command triggered");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.tabs.duplicate(currentTab.id, (duplicatedTab) => {
        console.log("Tab duplicated:", duplicatedTab);
      });
    });
  }
});
