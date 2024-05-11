import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SentenceForm = ({ onFormSubmit }) => {
  const [inputSentence, setInputSentence] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputSentence);
  };

  const handleChange = (e) => {
    setInputSentence(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="text-center">
      <h3 className="mb-4">Enter a sentence</h3>
      <Form.Group controlId="sentenceInput" className="mb-4">
        <Form.Control
          as="textarea"
          placeholder="Enter a sentence"
          value={inputSentence}
          onChange={handleChange}
          className="autosize-input"
        />
      </Form.Group>
      <Button variant="info" type="submit"className='mb-4' size="md">
        Split
      </Button>
    </Form>
  );
};

export default SentenceForm;