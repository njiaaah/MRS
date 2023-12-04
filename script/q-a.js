document.addEventListener('DOMContentLoaded', ()=>{


    function getqaResults() {

      const qaToggleBtns = $('.q-a-head');
      const qaAddons = $('.q-a-addon');
      const qaLeftToggleBtns = $('.q-a-left-toggle-selected');
      const qaRightToggleBtns = $('.q-a-right-toggle-selected');
      

      qaToggleBtns.click(function() {
        const index = qaToggleBtns.index(this);
        qaAddons.eq(index).slideToggle(175);
        qaLeftToggleBtns.toggleClass('q-a-left-toggle-selected');
        qaLeftToggleBtns.toggleClass('q-a-left-toggle');
        qaRightToggleBtns.toggleClass('q-a-right-toggle-selected');
        qaRightToggleBtns.toggleClass('q-a-right-toggle');
      });

    }

    getqaResults()

})