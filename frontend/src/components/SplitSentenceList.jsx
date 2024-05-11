import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SplitSentenceList = ({ sentences }) => {
  console.log(sentences);
  return (
    <ListGroup>
      {sentences.map((sentence, index) => (
        <ListGroup.Item key={index}>{sentence}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SplitSentenceList;