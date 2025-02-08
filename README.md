# Chrome Shortcuts Extension

A Chrome extension for managing keyboard shortcuts.

## Project Structure

```
chrome-shortcuts-extension/
├── src/
│   ├── background/
│   │   └── background.js
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.css
│   │   └── popup.js
│   └── utils/
│       └── shortcuts.js
├── public/
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   └── manifest.json
├── package.json
└── README.md
```

## Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension directory

## License

MIT
