import { useState } from 'react';

const TopicSearch = () => {
  // Sample topics data
  const topics = [
    { id: 1, name: 'Thermodynamics', category: 'Physics' },
    { id: 2, name: 'Organic Chemistry', category: 'Chemistry' },
    { id: 3, name: 'Algebra', category: 'Mathematics' },
    { id: 4, name: 'Cell Biology', category: 'Biology' },
    { id: 5, name: 'Electromagnetism', category: 'Physics' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter topics based on search term
  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Topic Catalogue</h1>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchInput}
      />
      
      <div style={styles.topicsContainer}>
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <div key={topic.id} style={styles.topicCard}>
              <h3 style={styles.topicName}>{topic.name}</h3>
              <p style={styles.topicCategory}>{topic.category}</p>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No topics found</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  topicsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  topicCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  topicName: {
    margin: '0 0 10px 0',
    color: '#2c3e50',
  },
  topicCategory: {
    margin: '0',
    color: '#7f8c8d',
    fontSize: '14px',
  },
  noResults: {
    textAlign: 'center',
    color: '#e74c3c',
    gridColumn: '1 / -1',
    padding: '20px',
  },
};

export default TopicSearch;
