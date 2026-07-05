# Sudarshan & Shruti - Wedding Invitation

A beautiful, responsive wedding invitation web app built with React and Vite.

## Features

✨ **Elegant Design**
- Beautiful three-column layout with floral theme
- Traditional Hindu wedding invitation styling
- Responsive design for all devices

📱 **Responsive**
- Desktop, tablet, and mobile optimized
- Flexbox-based layout that adapts to screen size

🗺️ **Google Maps Integration**
- Click the "View on Google Maps" button to see the venue location
- Venue: Shri Ishwar Temple Kalyan Mantapa, Gandhi Nagar, Dharwad

📅 **Event Details**
- Wedding date: 09th July 2026
- Time: 12:28 PM
- Location: Shri Ishwar Temple Kalyan Mantapa, Gandhi Nagar, Dharwad

## Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Project Structure

```
sudarshan-shruti/
├── src/
│   ├── App.jsx           # Main invitation component
│   ├── App.css           # Styling and responsive design
│   └── main.jsx          # React entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with flexbox and media queries

## Customization

To customize the invitation:

1. Edit `src/App.jsx` to change:
   - Couple names
   - Wedding date and time
   - Venue details
   - Blessing/parent names

2. Edit `src/App.css` to modify:
   - Colors (update `#8B4789`, `#d4567a`, etc.)
   - Fonts and sizes
   - Layout spacing

3. Update the Google Maps link in the `handleLocationClick` function

## Deployment

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### Deploy to Vercel, Netlify, or other platforms

Both platforms support Vite projects out of the box. Connect your GitHub repository and select Vite as the framework.

## License

This project is open source and available for personal use.

---

**May your love story be as beautiful as this day!** 💕
