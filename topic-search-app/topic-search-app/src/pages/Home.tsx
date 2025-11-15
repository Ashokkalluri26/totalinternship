import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import { Topic } from '../types';

const Home: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  
  const handleSearch = (searchTerm: string) => {
    // Logic to fetch topics based on the search term
    // This is a placeholder for the actual API call
    const fetchedTopics: Topic[] = []; // Replace with actual fetch logic
    setTopics(fetchedTopics);
  };

  return (
    <div className="home">
      <h1>Topic Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <ResultsList topics={topics} />
    </div>
  );
};

export default Home;