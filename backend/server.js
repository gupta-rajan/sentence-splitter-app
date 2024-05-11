import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';

dotenv.config();
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Instantiate winkNLP with the English language model
const nlp = winkNLP(model);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Define API endpoint for splitting sentences
app.post('/api/split', (req, res) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
      throw new Error('Invalid input text');
    }
    // Split the text using NLP-based method
    const nlpSplitSentences = nlpSplit(text);
    // Apply custom splitting logic to each sentence
    const customSplitSentences = nlpSplitSentences.flatMap(sentence => customSplit(sentence));
    res.json({ sentences: customSplitSentences });
  } catch (error) {
    console.error('Error splitting sentences:', error.message);
    res.status(400).json({ error: error.message });
  }
});

// NLP-based splitting method
function nlpSplit(text) {
  const doc = nlp.readDoc(text);
  const sentences = doc.sentences().out();
  return sentences;
}

// Custom splitting logic based on specific keywords or patterns
function customSplit(sentence) {
  // Define keywords or patterns for splitting
  const splitKeywords = [' and ', ' or ', ', ']; // Add more if needed

  // Split the sentence based on keywords or patterns
  let splitSentences = [sentence];
  splitKeywords.forEach(keyword => {
    const newSentences = [];
    splitSentences.forEach(sentence => {
      newSentences.push(...sentence.split(keyword));
    });
    splitSentences = newSentences;
  });

  // Remove empty or whitespace-only sentences
  splitSentences = splitSentences.filter(sentence => sentence.trim() !== '');

  return splitSentences;
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
