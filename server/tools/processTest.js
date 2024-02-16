const axios = require("axios");
async function processText() {
  try {
    const apiKey = "PTptKAkW811u4DGCY9hS2gip2WgEFLsG";
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${apiKey}`
    );

    const stopWords = new Set([
      "and",
      "is",
      "it",
      "are",
      "the",
      "of",
      "in",
      "to",
      "for",
      "on",
      "at",
      "a",
      ",",
    ]);

    // Map articles to words with URLs
    const words = response.data.results.flatMap((article) => {
      const titleWords = article.title
        .split(/\s+/)
        .filter((word) => !stopWords.has(word.toLowerCase()));

      return titleWords.map((word) => ({
        word,
        url: article.url,
      }));
    });

    // Count occurrences of each word along with URL
    const wordCount = {};
    words.forEach(({ word, url }) => {
      const lowercaseWord = word.toLowerCase();
      wordCount[lowercaseWord] = {
        count:
          (wordCount[lowercaseWord] && wordCount[lowercaseWord].count + 1) || 1,
        url,
      };
    });

    // Create an array of unique words with their counts and URLs
    const uniqueWords = Object.keys(wordCount).map((word) => ({
      word,
      count: wordCount[word].count,
      url: wordCount[word].url,
    }));

    // uniqueWords.sort((a, b) => b.count - a.count);

    return uniqueWords;
  } catch (error) {
    console.error("Error fetching top stories:", error.message);
    throw error;
  }
}

module.exports = processText;
