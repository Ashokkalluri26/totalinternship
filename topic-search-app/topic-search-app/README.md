# Topic Search App

## Overview
The Topic Search App is a React-based application that allows users to search for topics and view detailed information about them. The app is structured using functional components and TypeScript for type safety.

## Folder Structure
```
topic-search-app
├── src
│   ├── components
│   │   ├── SearchBar.tsx
│   │   ├── TopicCard.tsx
│   │   └── ResultsList.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   └── index.tsx
├── public
│   └── index.html
├── videos
│   └── case-study-explanation.mp4
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd topic-search-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Components
- **SearchBar**: Handles user input for searching topics.
- **TopicCard**: Displays individual topic information.
- **ResultsList**: Renders a list of `TopicCard` components based on search results.
- **Home**: Main page that integrates the `SearchBar` and `ResultsList`.

## Types
The application uses TypeScript interfaces to define the structure of the data, including:
- `Topic`
- `SearchResults`

## Video Explanation
A 2-minute video explaining the case study and code structure can be found in the `videos` folder:
- [Case Study Explanation](videos/case-study-explanation.mp4)

## GitHub Repository
You can find the source code and additional resources in the GitHub repository:
- [GitHub Repository](<repository-url>) 

## Conclusion
This project demonstrates the use of React and TypeScript to create a functional web application. Follow the steps above to set up and run the application locally.