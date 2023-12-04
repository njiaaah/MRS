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

    // SCROLLER NEWS

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
    }

    // SCROLLER ARTICLE

    var scrollerArticle = document.querySelector('#carousel_article')

    if (document.querySelector('#carousel_article_controls')) {
        var scrollerArticlecontrols = document.querySelector('#carousel_article_controls').children
        scrollerArticle.addEventListener('scroll', () => {
            updateScrollerControls(scrollerArticle, scrollerArticlecontrols)
        })

        for (let i = 0; i < scrollerArticlecontrols.length; i++) {
            scrollerArticlecontrols[i].addEventListener('click', () => {
                clickScrollerControls(scrollerArticle, scrollerArticlecontrols, i)
            })
        }
    }

    const scrollArticlePrev = document.querySelector('#carousel_article_side_controls_prev')
    const scrollArticleNext = document.querySelector('#carousel_article_side_controls_next')

    scrollArticlePrev.addEventListener('click', ()=>{
        let offsetLeft = scrollerArticle.scrollLeft - (scrollerArticle.children[0].clientWidth + 16)
        scrollerArticle.scrollTo ({
            left: offsetLeft,
            behavior: 'smooth'
        })
    })
    scrollArticleNext.addEventListener('click', ()=>{
        let offsetLeft = scrollerArticle.scrollLeft + (scrollerArticle.children[0].clientWidth + 16)
        scrollerArticle.scrollTo ({
            left: offsetLeft,
            behavior: 'smooth'
        })
    })

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