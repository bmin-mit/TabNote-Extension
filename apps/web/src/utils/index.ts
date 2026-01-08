import quotes from "@/../public/qoutes.json";

const QUOTES_COUNT = quotes.length;

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * QUOTES_COUNT)];
}
