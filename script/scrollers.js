document.addEventListener('DOMContentLoaded', ()=>{

    // SCROLLERS

        // scroller - элемент который скролится с классами horizontal-scroller, snaps-inline
        // controls - массив с кнопками для управления данного скрола

    function updateScrollerControls(scroller, controls) {
        currentScroll = parseInt((scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth) - 0.01) * controls.length)
        for (let i = 0; i < controls.length; i++) {
            controls[i].classList.remove('active-point')
        }
        if(controls) {
            controls[currentScroll].classList.add('active-point')
        }
        
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

    // SCROLLER 02

    var scroller01 = document.querySelector('#carousel_002')

    if (document.querySelector('#carousel_002_controls')) {
        var scroller01controls = document.querySelector('#carousel_002_controls').children
        scroller01.addEventListener('scroll', () => {
            updateScrollerControls(scroller01, scroller01controls)
        })

        for (let i = 0; i < scroller01controls.length; i++) {
            scroller01controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller01, scroller01controls, i)
            })
        }
    }
    // SCROLLER 03

    var scroller03 = document.querySelector('#carousel_003')

    if (document.querySelector('#carousel_003_controls')) {
        var scroller03controls = document.querySelector('#carousel_003_controls').children
        scroller03.addEventListener('scroll', () => {
            updateScrollerControls(scroller03, scroller03controls)
        })

        for (let i = 0; i < scroller03controls.length; i++) {
            scroller03controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller03, scroller03controls, i)
            })
        }
        const scroll03Prev = document.querySelector('#carousel_003_side_controls_prev')
        const scroll03Next = document.querySelector('#carousel_003_side_controls_next')

        scroll03Prev.addEventListener('click', ()=>{
            let offsetLeft = scroller03.scrollLeft - (scroller03.children[0].clientWidth + 16)
            scroller03.scrollTo ({
                left: offsetLeft,
                behavior: 'smooth'
            })
        })
        scroll03Next.addEventListener('click', ()=>{
            let offsetLeft = scroller03.scrollLeft + (scroller03.children[0].clientWidth + 16)
            scroller03.scrollTo ({
                left: offsetLeft,
                behavior: 'smooth'
            })
        })
    }

    
    // SCROLLER 04

    var scroller04 = document.querySelector('#carousel_004')

    if (document.querySelector('#carousel_004_controls')) {
        var scroller04controls = document.querySelector('#carousel_004_controls').children
        scroller04.addEventListener('scroll', () => {
            updateScrollerControls(scroller04, scroller04controls)
        })

        for (let i = 0; i < scroller04controls.length; i++) {
            scroller04controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller04, scroller04controls, i)
            })
        }
    }
    // SCROLLER 05

    var scroller05 = document.querySelector('#carousel_005')

    if (document.querySelector('#carousel_005_controls')) {
        var scroller05controls = document.querySelector('#carousel_005_controls').children
        scroller05.addEventListener('scroll', () => {
            updateScrollerControls(scroller05, scroller05controls)
        })

        for (let i = 0; i < scroller05controls.length; i++) {
            scroller05controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller05, scroller05controls, i)
            })
        }
    }

    // SCROLLER CONTACT-PARTNER

    var scroller06 = document.querySelector('.company-partners-container')

    if (document.querySelector('#carousel-company-partners')) {
        var scroller06controls = document.querySelector('#carousel-company-partners').children
        scroller06.addEventListener('scroll', () => {
            updateScrollerControls(scroller06, scroller06controls)
        })

        for (let i = 0; i < scroller06controls.length; i++) {
            scroller06controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller06, scroller06controls, i)
            })
        }
    }

    // SCROLLER CONTACT-achievement

    var scroller07 = document.querySelector('.company-achievement-container')

    if (document.querySelector('#carousel-company-achievement')) {
        var scroller07controls = document.querySelector('#carousel-company-achievement').children
        scroller07.addEventListener('scroll', () => {
            updateScrollerControls(scroller07, scroller07controls)
        })

        for (let i = 0; i < scroller06controls.length; i++) {
            scroller07controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller07, scroller07controls, i)
            })
        }
    }

    // SCROLLER TYPICAL LAYOUTS

    var scrollerLayouts = document.querySelector('#carousel_layouts')

    if (document.querySelector('#carousel_layouts_controls')) {
        var scrollerLayoutscontrols = document.querySelector('#carousel_layouts_controls').children
        scrollerLayouts.addEventListener('scroll', () => {
            updateScrollerControls(scrollerLayouts, scrollerLayoutscontrols)
        })

        for (let i = 0; i < scrollerLayoutscontrols.length; i++) {
            scrollerLayoutscontrols[i].addEventListener('click', () => {
                clickScrollerControls(scrollerLayouts, scrollerLayoutscontrols, i)
            })
        }
    }
    
    // SCROLLER HC DOCS

    var scrollerDocs = document.querySelector('#carousel_docs')

    if (document.querySelector('#carousel_docs_controls')) {
        var scrollerDocscontrols = document.querySelector('#carousel_docs_controls').children
        scrollerDocs.addEventListener('scroll', () => {
            updateScrollerControls(scrollerDocs, scrollerDocscontrols)
        })

        for (let i = 0; i < scrollerLayoutscontrols.length; i++) {
            scrollerDocscontrols[i].addEventListener('click', () => {
                clickScrollerControls(scrollerDocs, scrollerDocscontrols, i)
            })
        }
    }

    // SCROLLER HC OFFICES

    var scrollerOffices = document.querySelector('#carousel_offices')

    if (document.querySelector('#carousel_offices_controls')) {
        var scrollerOfficescontrols = document.querySelector('#carousel_offices_controls').children
        scrollerOffices.addEventListener('scroll', () => {
            updateScrollerControls(scrollerOffices, scrollerOfficescontrols)
        })

        for (let i = 0; i < scrollerLayoutscontrols.length; i++) {
            scrollerOfficescontrols[i].addEventListener('click', () => {
                clickScrollerControls(scrollerOffices, scrollerOfficescontrols, i)
            })
        }
    }

        //SCROLLER NEWS-TEXT

        var scrollerNews = document.querySelector('#carousel_news')

        if (document.querySelector('#carousel_news_controls')) {
            var scrollerNewscontrols = document.querySelector('#carousel_news_controls').children
            scrollerNews.addEventListener('scroll', () => {
                updateScrollerControls(scrollerNews, scrollerNewscontrols)
            })
    
            for (let i = 0; i < scrollerNewscontrols.length; i++) {
                scrollerNewscontrols[i].addEventListener('click', () => {
                    clickScrollerControls(scrollerNews, scrollerNewscontrols, i)
                })
            }
            const scrollNewsPrev = document.querySelector('#carousel_news_side_controls_prev')
            const scrollNewsNext = document.querySelector('#carousel_news_side_controls_next')
    
            scrollNewsPrev.addEventListener('click', ()=>{
                let offsetLeft = scrollerNews.scrollLeft - (scrollerNews.children[0].clientWidth + 16)
                scrollerNews.scrollTo ({
                    left: offsetLeft,
                    behavior: 'smooth'
                })
            })
            scrollNewsNext.addEventListener('click', ()=>{
                let offsetLeft = scrollerNews.scrollLeft + (scrollerNews.children[0].clientWidth + 16)
                scrollerNews.scrollTo ({
                    left: offsetLeft,
                    behavior: 'smooth'
                })
            })
        }


    // scroller - id враппера со скролл эелементами
    // controls - id статус бара 

    // function scrollerInit(scroller, controls) {

    //     var scoller = document.getElementById(scroller)
    //     var controls = document.getElementById(controls)

    //     if (controls) {
    //         scroller01.addEventListener('scroll', () => {
    //             updateScrollerControls(scoller, controls.children)
    //         })
    
    //         for (let i = 0; i < controls.children.length; i++) {
    //             controls.children[i].addEventListener('click', () => {
    //                 clickScrollerControls(scoller, controls.children, i)
    //             })
    //         }
    //     }

    // }

    // scrollerInit('carousel_002', 'carousel_002_controls')


})