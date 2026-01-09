import quotes from "@/../public/qoutes.json";

const QUOTES_COUNT = quotes.length;

export type Quote = {
  author: string;
  text: string;
};

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * QUOTES_COUNT)];
}
