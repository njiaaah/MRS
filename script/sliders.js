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

        // example on huindex.html

        sliderInit('sliderID','sliderID-lower', 'sliderID-upper', 0, 50, 5, 25, 1 )

        

        


})