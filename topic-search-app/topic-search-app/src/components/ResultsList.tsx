import React from 'react';
import TopicCard from './TopicCard';
import { Topic } from '../types';

interface ResultsListProps {
  topics: Topic[];
}

const ResultsList: React.FC<ResultsListProps> = ({ topics }) => {
  return (
    <div className="results-list">
      {topics.length > 0 ? (
        topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))
      ) : (
        <p>No topics found.</p>
      )}
    </div>
  );
};

export default ResultsList;