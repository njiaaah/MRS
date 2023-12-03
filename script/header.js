document.addEventListener('DOMContentLoaded', ()=>{

//    header desktop menu drop down

const headerChb = document.querySelector('#header-about-list-toggle')
const headerChb2 = document.querySelector('#header-about-list-toggle02')
const dropDownUl = document.querySelector('#dropDownUl')
const dropDownUl2 = document.querySelector('#dropDownUl02')
const listToUpdate = dropDownUl.querySelectorAll('[hidden]')

if(dropDownUl2) {
    const listToUpdate2 = dropDownUl2.querySelectorAll('[hidden]')

    headerChb2.addEventListener('change',()=>{
        listToUpdate2.forEach(item => {
            if(headerChb2.checked) {
                item.removeAttribute('hidden')
            } else {
                item.setAttribute('hidden', '')
            }
        });
    })
}


headerChb.addEventListener('change',()=>{
    listToUpdate.forEach(item => {
        if(headerChb.checked) {
            item.removeAttribute('hidden')
        } else {
            item.setAttribute('hidden', '')
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
        document.body.style.overflow = 'auto'
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
        document.body.style.overflow = 'auto'
    }
})









})



