import './HomeFormat.scss';

const createQuoteCards = (quote) => {
  let domString = '';
  domString += `
    <div class="container-fluid">
        <div class="card homeCard d-flex">
              <h2>${quote.quote}</h2>
           </div>
        </div>
      </div>
    </div>
  `;
  return domString;
};

export default { createQuoteCards };
