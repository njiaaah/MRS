document.addEventListener('DOMContentLoaded', ()=>{
    
    const modals = document.querySelectorAll('.modal')
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn')
    const modalBackdrops = document.querySelectorAll('.modal-backdrop')
    const modalOpenBtns = document.querySelectorAll('.open-callback-modal')

    function closeModals() {
        modals.forEach(modal => {
            modal.style.display = 'none' 
            document.body.style.overflow = 'auto'
            // document.body.style.paddingRight = '0px'
        });
    }

    modalCloseBtns.forEach(button => {
        button.addEventListener('click', ()=>{
            closeModals()
        })
    });

    modalBackdrops.forEach(backdrop => {
        backdrop.addEventListener('click', ()=>{
            closeModals()
        })
    });

    modalOpenBtns.forEach(button => {
        button.addEventListener('click',()=>{
            document.getElementById('callback-modal').style.display = 'block'
            document.body.style.overflow = 'hidden'
            // document.body.style.paddingRight = '18px'
        }) 
    });

    document.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            closeModals()
        }
    });



})

