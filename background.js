// Create a context menu item for SSL check
chrome.contextMenus.create({
  id: "ssl-check",
  title: "Open link with SSL Check",
  contexts: ["link", "selection"],
});

// Listen for clicks on the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  let url;
  // Check if a link URL is available
  if (info.linkUrl) {
let link = info.linkUrl;
// Remove "https://" or "http://" prefix from the link
if (link.substr(0, 8) === "https://") {
  link = link.substr(8);
} else if (link.substr(0, 7) === "http://") {
  link = link.substr(7);
}
// Construct the URL for SSL check
    url = "SSLsite" + link;
  } 
// Check if selected text is available
else if (info.selectionText) {
    const selection = info.selectionText;
// URL encode the selected text
    url = "SSLsite" + encodeURIComponent(selection);
  }
// Create a new tab with the constructed URL
  chrome.tabs.create({ url });
});
