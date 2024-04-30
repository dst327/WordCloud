const axios = require("axios");
const { json } = require("body-parser");
const fs = require("fs");
async function processText(input) {
  try {
    const day = new Date().getDay();
    if (input == day) {
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
            (wordCount[lowercaseWord] && wordCount[lowercaseWord].count + 1) ||
            1,
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
      const data = JSON.stringify(uniqueWords);
      fs.writeFile(`${day}.txt`, data, (err) => {
        if (err) console.log(err);
      });
      return uniqueWords;
    } else {
      try {
        const data = fs.readFileSync(`${input}.txt`, "utf8");
        return JSON.parse(data);
      } catch (err) {
        return "No Data";
      }
    }
  } catch (error) {
    console.log(error);
    console.error("Error fetching top stories:", error.message);
    throw error;
  }
}

function data() {
  const data = {
    "United States": 1.0,
    "Politics Government": 1.0,
    "Decisions Verdicts": 0.625,
    Case: 0.5,
    Trump: 0.5,
    Documents: 0.5,
    "Presidential Election": 0.5,
    Deaths: 0.375,
    Shooting: 0.375,
    "Federal Criminal": 0.375,
    Fatalities: 0.25,
    Traffic: 0.25,
    Accidents: 0.25,
    Safety: 0.25,
    Roads: 0.25,
    Mass: 0.25,
    International: 0.25,
    Relations: 0.25,
    Airlines: 0.25,
    Airplanes: 0.25,
    Transportation: 0.25,
    American: 0.25,
    Tornadoes: 0.125,
    Murders: 0.125,
    Attempted: 0.125,
    Homicides: 0.125,
    Education: 0.125,
    School: 0.125,
    Armed: 0.125,
    Attacks: 0.125,
    Oxford: 0.125,
    Charter: 0.125,
    Township: 0.125,
    Mich: 0.125,
    Israel: 0.125,
    Gaza: 0.125,
    War: 0.125,
    Palestinians: 0.125,
    St: 0.125,
    Patrick: 0.125,
    Day: 0.125,
    Parks: 0.125,
    National: 0.125,
    Monuments: 0.125,
    Seashores: 0.125,
    Actors: 0.125,
    Actresses: 0.125,
    Hot: 0.125,
    Springs: 0.125,
    Recreation: 0.125,
    Areas: 0.125,
    Read: 0.125,
    Rejection: 0.125,
    Motion: 0.125,
    Dismiss: 0.125,
    Prisons: 0.125,
    Prisoners: 0.125,
    Storming: 0.125,
    US: 0.125,
    Capitol: 0.125,
    Jan: 0.125,
    Executive: 0.125,
    Privilege: 0.125,
    Doctrine: 0.125,
    Snow: 0.125,
    Snowstorms: 0.125,
    Power: 0.125,
    Failures: 0.125,
    Blackouts: 0.125,
    Airports: 0.125,
    Delays: 0.125,
    Animals: 0.125,
    Wildlife: 0.125,
    Trade: 0.125,
    Poaching: 0.125,
    Forgery: 0.125,
    Endangered: 0.125,
    Extinct: 0.125,
    Species: 0.125,
    Sheep: 0.125,
    Breeding: 0.125,
    Hispanic: 0.125,
    Polls: 0.125,
    Public: 0.125,
    Opinion: 0.125,
    Minorities: 0.125,
    Race: 0.125,
    Ethnicity: 0.125,
    Abortion: 0.125,
    Police: 0.125,
    Brutality: 0.125,
    Misconduct: 0.125,
    Law: 0.125,
    Legislation: 0.125,
    Social: 0.125,
    Media: 0.125,
    Video: 0.125,
    Recordings: 0.125,
    Downloads: 0.125,
    Streaming: 0.125,
    Suits: 0.125,
    Litigation: 0.125,
    Civil: 0.125,
    Teeth: 0.125,
    Dentistry: 0.125,
    Mitch: 0.125,
    Albom: 0.125,
    Among: 0.125,
    Group: 0.125,
    Volunteers: 0.125,
    Rescued: 0.125,
    Haiti: 0.125,
    Mental: 0.125,
    Health: 0.125,
    Disorders: 0.125,
    Electric: 0.125,
    Hybrid: 0.125,
    Vehicles: 0.125,
    Mines: 0.125,
    Mining: 0.125,
    Batteries: 0.125,
    Economy: 0.125,
    Lithium: 0.125,
    Metal: 0.125,
    Fuel: 0.125,
    Emissions: 0.125,
    Obituaries: 0.125,
    Kidnapping: 0.125,
    Hostages: 0.125,
    Terrorism: 0.125,
    Diplomatic: 0.125,
    Service: 0.125,
    Embassies: 0.125,
    Consulates: 0.125,
    Theater: 0.125,
  };

  const val = Object.entries(data).map((word) => ({
    word: word[0],
    count: word[1] * 3.5,
  }));

  return val;
}

module.exports = { data, processText };
