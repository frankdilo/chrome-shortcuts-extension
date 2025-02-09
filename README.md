# PowerKeys

A Chrome extension for managing keyboard shortcuts.

## Links

- Figma file with icon [here](<https://www.figma.com/design/9fnvcwFR26f0yFTcHDpKPb/Chrome-Extension-Template-(Community)?node-id=404-37&p=f&t=vIJgKYebCI7v7kCf-0>)

## Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension directory

## Project Structure

```
powerkeys/
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
