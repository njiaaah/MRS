import morgagesProgramms from '../data/programs.js'

function generateMortgageTable(programs) {
  const tableContainer = document.querySelector('.mortgage-table-container');

  programs.forEach(program => {
    const tableItem = document.createElement('div');
    tableItem.classList.add('mortgage-table-item');

    const updateBanksContainer = () => {
      const banksContainer = tableItem.querySelector('.mortgage-addon-container');
      banksContainer.innerHTML = program.banks.map(bank => {
        const rateValue = extractAverageRate(bank.rate);
        const displayRate = typeof bank.rate === 'string' ? bank.rate : rateValue;
        const rateClass = typeof bank.rate === 'string' ? 'no-before' : '';
    
        const bankInfo = `
          <div class="mortgage-addon-item">
            <div class="bank-info">
              <span>${bank.name}</span>
              <span class="${rateClass}">${displayRate}</span>
              <span>${bank.fee}</span>
            </div>
        `;
    
        const bankContacts = bank.contacts.map(contact => `
          <div class="bank-contact">
            <span>${contact.name}</span>
            ${contact.phone ? `<a href="tel:${contact.phone}">${contact.phone}</a>` : ''}
          </div>
        `).join('');
    
        const bankItem = `
          ${bankInfo}
          ${bankContacts}
          </div>
        `;
    
        return bankItem;
      }).join('');
    };

    const extractAverageRate = (rateString) => {
      if (typeof rateString === 'string') {
        const numericValues = rateString.split('-').map(parseFloat);
    
        const validNumericValues = numericValues.filter(value => !isNaN(value));
        
        if (validNumericValues.length > 0) {
          const average = validNumericValues.reduce((sum, value) => sum + value, 0) / validNumericValues.length;
          return average;
        } else {
          return parseFloat(rateString) || 0;
        }
      } else {
        return parseFloat(rateString) || 0;
      }
    };
    
    tableItem.innerHTML = `
      <div class="mortgage-table-item-head">
        <h4 class="programm-name">${program.name}</h4>
        <span class="mortgage-toggle">
          <img src="./img/icons/square-arrow-down.svg" alt="">
        </span>
      </div>
      <div class="mortgage-table-item-addon" style="display: none;">
        <div class="mortgage-addon-head">
          <span>Банк</span>
          <span class="sortable" data-sort="rate">Ставка <img src="./img/icons/arrow-down.svg" alt=""></span>
          <span class="sortable" data-sort="fee">Первый взнос <img src="./img/icons/arrow-down.svg" alt=""></span>
        </div>
        <div class="mortgage-addon-container"></div>
      </div>
    `;

    const sortableHeaders = tableItem.querySelectorAll('.sortable');
    sortableHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const sortKey = header.getAttribute('data-sort');
        const sortOrder = header.classList.toggle('sorted-desc') ? -1 : 1;
    
        const arrowImg = header.querySelector('img');
        arrowImg.classList.toggle('rotate-180', sortOrder === 1);
    
        program.banks.sort((a, b) => {
          const valueA = sortKey === 'rate' ? extractAverageRate(a.rate) : parseFloat(a.fee);
          const valueB = sortKey === 'rate' ? extractAverageRate(b.rate) : parseFloat(b.fee);
    
          return sortOrder * (valueA - valueB);
        });
    
        updateBanksContainer();
      });
    });

    tableContainer.appendChild(tableItem);
    updateBanksContainer();
  });
}
generateMortgageTable(morgagesProgramms);

function getMortgageResults() {

  const mortgageToggleBtns = $('.mortgage-toggle');
  const mortgageAddons = $('.mortgage-table-item-addon');

  mortgageToggleBtns.click(function() {
    const index = mortgageToggleBtns.index(this);
    mortgageAddons.eq(index).slideToggle(175);
    $(this).toggleClass('rotate180');
  });

}

getMortgageResults()


