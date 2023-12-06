import morgagesProgramms from '../data/programs.js'

document.addEventListener('DOMContentLoaded',()=>{

    function generateMortgageTable(programs) {
        const tableContainer = document.querySelector('.mortgage-table-container');
      
        programs.forEach(program => {
          const tableItem = document.createElement('div');
          tableItem.classList.add('mortgage-table-item');
      
          const banksHTML = program.banks.map(bank => {
            const contactsHTML = bank.contacts.map(contact => `
              <div class="bank-contact">
                <span>${contact.name}</span>
                ${contact.phone ? `<a href="tel:${contact.phone}">${contact.phone}</a>` : ''}
              </div>
            `).join('');
      
            const rateSpan = document.createElement('span');
            rateSpan.textContent = bank.rate;
      
            if (typeof bank.rate === 'string') {
              rateSpan.classList.add('no-before');
            }
      
            return `
              <div class="mortgage-addon-item">
                <div class="bank-info">
                  <span>${bank.name}</span>
                  ${rateSpan.outerHTML}
                  <span>${bank.fee}</span>
                </div>
                ${contactsHTML}
              </div>
            `;
          }).join('');
      
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
                <span>Ставка <img src="./img/icons/arrow-down.svg" alt=""></span>
                <span><span class="hide560">Первый </span>взнос <img src="./img/icons/arrow-down.svg" alt=""></span>
              </div>
              ${banksHTML}
            </div>
          `;
      
          tableContainer.appendChild(tableItem);
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
})

