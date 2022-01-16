const quotes = [
    "Apple earned $1 billion every day in financial year 2020-21",
    "MCD sells 1 billion burgers every year"
]
export function getQuote() {
    const index = Math.floor((new Date().getMinutes()/60) * quotes.length);
    return quotes[index];
}