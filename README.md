# SaveMyLink - Chrome Bookmark Manager

A beautiful and functional Chrome extension for saving and managing bookmarks with an elegant glass morphism design.

## 📋 Overview

**SaveMyLink** is a lightweight Chrome extension that allows users to quickly save, organize, and access their favorite links. Unlike browser bookmarks, this extension provides a minimalist popup interface for fast link management.

## ✨ Features

### Core Functionality
- **Save Links** - Save any URL by entering it manually in the input field
- **Save Current Tab** - One-click save of the currently active browser tab
- **Delete Individual Links** - Remove specific bookmarks with a delete button (🗑️)
- **Delete All Links** - Double-click the DELETE ALL button to clear all bookmarks
- **Persistent Storage** - All bookmarks are saved locally using localStorage and persist across browser sessions

### URL Management
- **URL Validation** - Validates domain format and rejects invalid URLs
- **Smart URL Formatting** - Automatically adds `https://` protocol to URLs without one
  - Example: `google.com` → saved as `https://google.com`
- **URL Truncation** - Long URLs are shortened for display (60 characters max)
- **Clickable Links** - Click any saved link to open it in a new tab

### User Interface
- **Glass Morphism Design** - Modern, semi-transparent frosted glass aesthetic
- **Purple Gradient Theme** - Beautiful gradient background (#667eea to #764ba2)
- **Rounded Corners** - All elements feature smooth, curved edges
- **Scrollable List** - Links are scrollable when list exceeds 400px height
- **Smooth Animations** - Hover effects and transitions for better UX
- **Responsive Design** - Works on any screen size with compact layout

## 🛠️ Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Glass morphism, gradients, animations, responsive design
- **JavaScript (ES6+)** - Modular, organized code structure
- **Chrome Extensions API** - `chrome.tabs` for tab access

## 📁 Project Structure

```
SaveMyLink/
├── index.html          # UI markup
├── index.css           # Styling with glass morphism
├── index.js            # Core functionality
├── manifest.json       # Extension configuration
├── delete_icon.png     # Delete button icon
└── README.md           # This file
```

## 🎨 Code Organization

The JavaScript is organized into logical sections:
- **DOM References** - Element selections
- **Utility Functions** - URL validation and formatting
- **Storage Functions** - Load, save, delete operations
- **Display Functions** - List rendering
- **Event Listeners** - User interactions
- **Initialization** - App startup

## 🚀 How to Install

1. Go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `Chrome-Extension` folder
5. The extension appears in your Chrome toolbar

## 💡 How to Use

1. **Save a Link:**
   - Enter a URL (e.g., `google.com` or `https://github.com`)
   - Click **SAVE**
   - Link appears in the list below

2. **Save Current Page:**
   - Open any webpage
   - Click **SAVE TAB**
   - Current page URL is added to your bookmarks

3. **Open a Link:**
   - Click any link in the list
   - Opens in a new tab

4. **Delete a Link:**
   - Click the 🗑️ icon next to any link
   - Link is removed immediately

5. **Delete All Links:**
   - Double-click the **DELETE ALL** button
   - All bookmarks are cleared

## ⚙️ Features Detail

### URL Validation
- Validates domain format before saving
- Checks for proper TLD (.com, .org, .io, etc.)
- Rejects invalid formats like `randomtext` or `123.456`
- Automatically adds `https://` for domains without protocol

### Storage
- Uses Chrome's `localStorage` API
- Works offline perfectly
- No external API dependencies
- Survives browser restarts and laptop shutdowns

### Performance
- Fast, lightweight extension (~50KB)
- No network requests required
- Instant load and save operations
- Smooth scrolling with custom scrollbar

## 🎯 Future Enhancements (Optional)

- Categories/Tags for organizing links
- Search/Filter functionality
- Export/Import bookmarks
- Cloud sync across devices
- Link preview on hover

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Developer

Built with ❤️ using HTML, CSS, and JavaScript.
