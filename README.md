# Perplexity Two-Tab Helper – Safari Extension

A minimal, personal Safari extension for macOS that lets you send selected text (or the current page’s title) to Perplexity.ai, opening or reusing a single tab for quick, frictionless searches—**no API keys required**.

---

## Features

- **One-click or Shortcut Search**  
  Highlight any text and click the toolbar icon or use `Shift+Command+P` to send it as a query to Perplexity.ai.

- **Tab Reuse**  
  If a Perplexity tab is already open, the extension reuses and updates it; avoids cluttering your tab bar.

- **Context-Aware**  
  Defaults to the current tab’s title if no text is selected.

- **Fully Local, No Server**  
  Works entirely on your machine. No authentication, no backend.

---

## Limitations

- **No Memory or Ongoing Chat**  
  Each search is a standalone, new chat on Perplexity—threads do **not** accumulate history.

- **No API Use, No Sidebar**  
  Does not embed Perplexity in a sidebar or use the API. Opens or updates a full tab.

- **Spaces Support**  
  You cannot automatically inject queries into Perplexity Spaces; this extension works only for fresh searches.

---

## Installation

1. **Clone this repository.**
2. Open the Xcode project on your Mac.
3. Build and run the app.  
   The extension will appear in Safari’s Extensions preferences.
4. Enable the “Perplexity Two-Tab Helper” extension in Safari (Settings → Extensions).

---

## Usage

- **Send a query:**  
  Highlight text and either:
  - Click the extension’s toolbar icon, or
  - Press `Shift + Command + P`
- **No selection?**  
  The extension will use the page’s title.
- **Rapid-fire searches:**  
  Each new query reuses the dedicated Perplexity tab.

---

## File Structure

| File/Folder             | Purpose                                 |
|-------------------------|-----------------------------------------|
| `manifest.json`         | Extension configuration                 |
| `bg.js`                 | Background script/tab management logic  |
| `selection.js`          | Content script for getting user selection |
| `[icon file]`           | 32×32 toolbar icon (referenced in manifest) |
| `Info.plist`            | Xcode/Safari extension info             |
| `PerplexityHelper_Extension.entitlements` | Extension entitlements  |
| `SafariWebExtensionHandler.swift`     | Swift glue (auto-generated) |

---

## Customization

- **Custom Instructions:**  
  You can append special instructions to the query text in `bg.js` if you want to influence Perplexity’s answer (but see limitations above).

- **Icons:**  
  Replace the icon file in the `Resources/images` folder as you like.

---

## License

For personal, educational, and research use. No warranty is provided.

---

## Disclaimer

This project is a personal utility for macOS/Safari. It is not affiliated with, endorsed by, or supported by Perplexity.ai or Apple.

