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
    sliderInit('calc01','calc01-lower', 'calc01-upper', 1000000, 50000000, 1000000, 10000000, 1 )
    sliderInit('calc02','calc02-lower', 'calc02-upper', 1000000, 10000000, 1000000, 2500000, 1)
    sliderInit('calc03','calc03-lower', 'calc03-upper', 1, 50, 1, 15, 1 )


    // all programms dropdown

    const allProgrammsBtn = document.querySelector('.calc-button-programms')
    const allProgrammsDd = document.querySelector('#calc-programms-drop-down')
    const programmsList = document.querySelectorAll('.program-name')

    

    $('.calc-button-programms').on('click', ()=>{
        $('#calc-programms-drop-down').slideToggle(250)
    })

    for (let i = 0; i < programmsList.length; i++) {
        programmsList[i].addEventListener('click', (e)=>{
            allProgrammsBtn.innerHTML = programmsList[i].innerHTML + '<img id="calc-all-programms-arrow" src="img/calc/arrow.svg" alt="">'
            $('#calc-programms-drop-down').slideToggle(250)
        })
        
    }
})