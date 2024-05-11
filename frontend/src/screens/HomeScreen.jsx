import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SentenceForm from '../components/SentenceForm';
import SplitSentenceList from '../components/SplitSentenceList';

const HomeScreen = () => {
  const [splitSentences, setSplitSentences] = useState([]);

  const handleFormSubmit = (sentence) => {
    setSplitSentences(sentence.split(' and ')); // Dummy splitting logic, replace with actual backend communication
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
