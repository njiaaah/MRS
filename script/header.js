document.addEventListener('DOMContentLoaded', ()=>{

//    header desktop menu drop down

const headerChb = document.querySelector('#header-about-list-toggle')
const dropDownUl = document.querySelector('#dropDownUl')
const listToUpdate = dropDownUl.querySelectorAll('[hidden]')

headerChb.addEventListener('change',()=>{
    listToUpdate.forEach(item => {
        if(headerChb.checked) {
            if(document.startViewTransition()) {
                document.startViewTransition(()=>{
                    item.removeAttribute('hidden')
                })
            } else item.removeAttribute('hidden')
        } else {
            if(document.startViewTransition()) {
                document.startViewTransition(()=>{
                    item.setAttribute('hidden', '')
                })
            } else item.setAttribute('hidden', '')
        }
    });
})

// hide menus on resize 

const mobileMenuChb = document.querySelector('#mobile-menu-toggle')

window.addEventListener('resize', ()=>{
    
    // header drop down list
    if(window.innerWidth < 920 && headerChb.checked) {
        listToUpdate.forEach(item=>{
            item.setAttribute('hidden', '')
            headerChb.checked = false
        })
    }

    // header mobile menu
    if(window.innerWidth > 800 && mobileMenuChb.checked) {
        mobileMenuChb.checked = false
        document.body.style.overflow = 'scroll'
    }
})


// backdrop click


const headBackdrop = document.querySelector('#mobile-menu-backdrop') 

headBackdrop.addEventListener('click',()=>{
    if (mobileMenuChb.checked) {
        mobileMenuChb.click()
    }
})

// scroll disable if mobile menu open 

mobileMenuChb.addEventListener('change' ,()=>{
    if(mobileMenuChb.checked) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
})









})



