document.addEventListener('DOMContentLoaded', ()=>{

//    header desktop menu drop down

const headerChb = document.querySelector('#header-about-list-toggle')
const ddItems = document.querySelectorAll('.drop-down-item')

headerChb.addEventListener('change',()=>{
    if(headerChb.checked) {

        if(document.startViewTransition()) {
            document.startViewTransition(()=>{
                ddItems.forEach(item => {
                    item.removeAttribute('hidden')
                });
            }) 
        } else {
            ddItems.forEach(item => {
                item.removeAttribute('hidden')
            });
        }
    

    } else {
        if(document.startViewTransition()) {
            document.startViewTransition(()=>{
                ddItems.forEach(item => {
                    item.setAttribute('hidden', '')
                });
            })
        } else {
            ddItems.forEach(item => {
                item.setAttribute('hidden', '')
            });
        }

    }
})

// close menu on mouseout





   


})