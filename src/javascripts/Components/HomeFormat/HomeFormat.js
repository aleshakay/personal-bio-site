import './HomeFormat.scss';

const createQuoteCards = (quote) => {
  const domString = `<h2 class="homeCard card">${quote.quote}</h2>`;
  return domString;
};

export default { createQuoteCards };
