document.addEventListener('DOMContentLoaded', ()=>{

    // making horizontal drag and inline snapping friends

    const allScrolls = document.querySelectorAll('.snapsinline')
    let isMouseDown = false


    for (let i = 0; i < allScrolls.length; i++) {
        allScrolls[i].addEventListener('mousedown', () => {
            allScrolls[i].classList.remove('snapsinline')
            document.body.style.cursor = 'grabbing'
            isMouseDown = true
        })

        allScrolls[i].addEventListener('mouseenter', () => {
            document.body.style.cursor = 'grab'
        })

        

        allScrolls[i].addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default'
            scrollAndSnap(allScrolls[i])
            // console.log('cock')
            isMouseDown = false
        })

        allScrolls[i].addEventListener('mouseup', () => {
            document.body.style.cursor = 'grab'
            scrollAndSnap(allScrolls[i])
            isMouseDown = false

        })

        window.addEventListener('mouseup', () => {
            document.body.style.cursor = 'grab'
            scrollAndSnap(allScrolls[i])
            isMouseDown = false

        })

    }

    function scrollAndSnap(element) {

        let scrollGap = window.getComputedStyle(element).rowGap

        if(scrollGap === 'normal') {
            scrollGap = 0
        }

        element.scrollTo({
            left: Math.round(element.scrollLeft / element.firstElementChild.offsetWidth) * element.firstElementChild.offsetWidth + Math.round(element.scrollLeft / element.firstElementChild.offsetWidth) * parseInt(scrollGap) - 1,
            behavior: 'smooth'
        })
        setTimeout(function () {
            if (!isMouseDown) {
                element.classList.add('snaps-inline')
            }
        }, 250)
    }



    







   


})