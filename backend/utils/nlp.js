import nltk from 'nltk';

// Download NLTK data
nltk.download('punkt');

export const split_sentences = (text) => {
    const sentences = nltk.sent_tokenize(text);
    return sentences;
};