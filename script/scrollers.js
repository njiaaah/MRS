document.addEventListener('DOMContentLoaded', ()=>{

    // SCROLLERS

        // scroller - элемент который скролится с классами horizontal-scroller, snaps-inline
        // controls - массив с кнопками для управления данного скрола

    function updateScrollerControls(scroller, controls) {
        currentScroll = parseInt((scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth) - 0.01) * controls.length)
        for (let i = 0; i < controls.length; i++) {
            controls[i].classList.remove('active-point')
        }
        controls[currentScroll].classList.add('active-point')
    }

    // btnIndex - порядковый номер кнопки по которой было кликнуто
    function clickScrollerControls(scroller, controls, btnIndex) {
        let offsetLeft = (btnIndex / (controls.length - 1)) * (scroller.scrollWidth - scroller.clientWidth)
        scroller.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
        })
    }

    // SCROLLER 01

    var scroller01 = document.querySelector('#carousel_001')

    if (document.querySelector('#carousel_001_controls')) {
        var scroller01controls = document.querySelector('#carousel_001_controls').children
        scroller01.addEventListener('scroll', () => {
            updateScrollerControls(scroller01, scroller01controls)
        })

        for (let i = 0; i < scroller01controls.length; i++) {
            scroller01controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller01, scroller01controls, i)
            })
        }
    }

    // scroller - id враппера со скролл эелементами
    // controls - id статус бара 

    function scrollerInit(scroller, controls) {

        var scoller = document.getElementById(scroller)
        var controls = document.getElementById(controls)

        if (controls) {
            scroller01.addEventListener('scroll', () => {
                updateScrollerControls(scoller, controls.children)
            })
    
            for (let i = 0; i < controls.children.length; i++) {
                controls.children[i].addEventListener('click', () => {
                    clickScrollerControls(scoller, controls.children, i)
                })
            }
        }

    }

    scrollerInit('carousel_002', 'carousel_002_controls')


})