export const duplicateTab = () => {
  console.log("Duplicate tab command triggered");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    chrome.tabs.duplicate(currentTab.id, (duplicatedTab) => {
      console.log("Tab duplicated:", duplicatedTab);
    });
  });
};
