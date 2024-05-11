// HomeScreen.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SentenceForm from '../components/SentenceForm';
import SplitSentenceList from '../components/SplitSentenceList';
import axios from 'axios';

const HomeScreen = () => {
  const [splitSentences, setSplitSentences] = useState([]);

  const handleFormSubmit = async (inputSentence) => {
    try {
      const response = await axios.post('/api/split', { text: inputSentence });
      
      if (!response.data) {
        throw new Error('No data received');
      }
  
      setSplitSentences(response.data.sentences);
      // console.log(response.data.sentences);
    } catch (error) {
      console.error('Error splitting sentence:', error.message);
      // Handle error
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="justify-content-center border rounded p-4">
        <Col>
          <h1 className="text-center mb-4">Sentence Splitter</h1>
          <SentenceForm onFormSubmit={handleFormSubmit} />
          <h3 className="mb-4">Output:</h3>
          {splitSentences.length > 0 && <SplitSentenceList sentences={splitSentences} />}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
