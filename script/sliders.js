document.addEventListener('DOMContentLoaded', ()=>{

        // SLIDER INIT


        function sliderInit(slider, lowerVal, higherVal ) {
            let sliderVals = [
              document.getElementById(lowerVal),
              document.getElementById(higherVal)
            ]
        
            if(document.getElementById(slider)) {
              noUiSlider.create(document.getElementById(slider), {
                start: [5, 20],
                connect: true,
                behaviour: "drag",
                step: 1,
                range: {
                  min: 5,
                  max: 20
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

        // example on huindex.html

        sliderInit('sliderID','sliderID-lower', 'sliderID-upper' )

        


})