export type Quote = {
  author: string;
  text: string;
};

export async function getRandomQuote(): Promise<Quote> {
  const quotes = (await import("../../public/quotes.json")).default;
  const quotes_len = quotes.length;
  return quotes[Math.floor(Math.random() * quotes_len)];
}
