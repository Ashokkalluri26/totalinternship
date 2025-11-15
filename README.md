# 🔍 Topic Search Application

A modern, responsive React application that enables users to search and filter through a comprehensive list of educational topics in real-time. Built with performance and user experience in mind, this application leverages Vite for lightning-fast development and production builds.

## ✨ Key Benefits
- **Lightning Fast**: Instant search results with optimized rendering
- **User-Friendly**: Intuitive interface with clean, modern design
- **Educational**: Perfect for learning resources, course catalogs, or knowledge bases
- **Customizable**: Easy to adapt for different datasets and use cases

## 🚀 Features
- 🔍 Real-time topic search with case-insensitive matching
- 🎨 Clean, responsive UI with card-based topic display
- ⚡ Built with Vite for fast development and production builds
- 🎯 Zero dependencies beyond React and Vite
- 📱 Mobile-friendly design that works on all devices

## Demo

A demo video is available upon request. Please contact the repository owner for access to the demonstration.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v8 or later) or Yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/topic-search-app.git
   cd topic-search-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   The application will open automatically in your default browser at [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
  ├── components/
  │   └── TopicSearch.jsx  # Main component with search and topic listing
  ├── App.jsx             # Root component
  ├── App.css             # Global styles
  └── main.jsx            # Application entry point
```

## How It Works

1. The `TopicSearch` component maintains the state of the search term and filters the topics list based on user input.
2. As the user types in the search box, the component filters the topics in real-time.
3. Each topic is displayed as a card showing the topic name and category.
4. If no topics match the search term, a "No topics found" message is displayed.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Customization

### Adding More Topics

To add or modify topics, edit the `topics` array in `src/components/TopicSearch.jsx`:

```javascript
const topics = [
  { id: 1, name: 'Thermodynamics', category: 'Physics' },
  // Add more topics here
];
```

### Styling

All styles are defined using inline styles in the `TopicSearch` component. You can modify the `styles` object at the bottom of the file to change the appearance.

## Submission

### Submission Files

This project includes the following files for submission:

1. **Source Code** - Complete React application with all components and assets
2. **README.md** - This documentation file with setup and usage instructions
3. **Demo Video** - 2-minute explanation of the case study and code structure

### Repository Link

All project files and the demo video are available in the GitHub repository:
[GitHub Repository](https://github.com/ashokkalluri26/topic-search-app)

## Deployment

To create a production build:

```bash
npm run build
```

This will create a `dist` folder with optimized and minified files ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Styled with CSS-in-JS
