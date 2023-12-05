document.addEventListener('DOMContentLoaded', ()=>{

    // SLIDER INIT
    
    function sliderInit(slider, lowerVal, higherVal, min, max, minStart, maxStart, step ) {
        let sliderVals = [
          document.getElementById(lowerVal),
          document.getElementById(higherVal)
        ]
    
        if(document.getElementById(slider)) {
          noUiSlider.create(document.getElementById(slider), {
            start: [minStart, maxStart],
            connect: true,
            behaviour: "drag",
            step: step,
            range: {
              min: min,
              max: max
            },
            format: {
              from: function (value) {
                return parseInt(value);
              },
              to: function (value) {
                return parseInt(value)
              }
            }
          })
      
          document.getElementById(slider).noUiSlider.on('update', function(values, handle){
            sliderVals[handle].innerHTML = values[handle].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          })
        }
    }



    // sliderInit(slider, lowerVal, higherVal, min, max, minStart, maxStart, step )

    // slider = id слайдера
    // lowerVal = id эелемена с минимальным значением
    // higherVal = id эелемена с максимальным значением
    // min = минимальное значение
    // max = максимальное значение
    // minStart = первое значение на старте
    // maxStart = второе значение на старте
    // step = значение на которое меняется val при перетаскивании

    // sliderInit('sliderID','sliderID-lower', 'sliderID-upper', 0, 50, 5, 25, 1 )
    sliderInit('sliderFilter01','sliderFilter01-lower', 'sliderFilter01-upper', 5, 50, 5, 50, 1 )
    sliderInit('sliderFilter02','sliderFilter02-lower', 'sliderFilter02-upper', 20, 150, 20, 150, 1 )

    // filter toggle addon show 

    // fire me on filter result amount change :^)
    function getFilterResults() {

      const filterToggleBtns = $('.expand-table-item-btn');
      const filterAddons = $('.filter-table-item-addon');
      
      filterToggleBtns.click(function() {
        const index = filterToggleBtns.index(this);
        filterAddons.eq(index).slideToggle(175);
        $(this).toggleClass('rotate180');
      });

    }

    getFilterResults()

    // enable tile view on 900px

    const rowViewChb = document.querySelector('#filter-view-toggle-table')
    const tileViewChb = document.querySelector('#filter-view-toggle-card')

    visualViewport.onresize = () => {
      if(rowViewChb.checked && window.innerWidth < 1030) {
        tileViewChb.click()
      }
    }

    const labels = document.querySelectorAll('.filter-labels-to-swap')
    const labelMain = document.querySelector('#labels-change-target')

    labels.forEach(label => {
        label.addEventListener('click',()=>{
          labelMain.innerHTML = label.innerHTML
          setTimeout(()=>{
            if(document.querySelector('#mobile-filter-options-toggle').checked) {
              document.querySelector('#mobile-filter-options-toggle').click()
            }
          },250)
        })

      
    });

    


})