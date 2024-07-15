import React, { useState } from 'react';
import Form from './Form';
import Output from './Output';
import './App.css';

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="app-container">
      {submittedData ? (
        <Output data={submittedData} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
