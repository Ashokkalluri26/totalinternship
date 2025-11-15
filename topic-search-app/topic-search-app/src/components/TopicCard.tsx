import React from 'react';
import { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
    <div className="topic-card">
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <a href={topic.link} target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
    </div>
  );
};

export default TopicCard;