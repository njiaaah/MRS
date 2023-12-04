document.addEventListener('DOMContentLoaded', ()=>{


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