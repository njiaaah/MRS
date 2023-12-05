document.addEventListener('DOMContentLoaded', ()=>{


    function getqaResults() {

      const qaToggleBtns = $('.q-a-head');
      const qaAddons = $('.q-a-addon');
      

      qaToggleBtns.click(function() {
        const index = qaToggleBtns.index(this);
        qaAddons.eq(index).slideToggle(175);
        $(this).toggleClass('q-a-left-right-toggle-selected');
        $(this).toggleClass('q-a-left-right-toggle');
      });

    }

    getqaResults()

})