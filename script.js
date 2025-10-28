// =======> Header Scroller

let navBar = document.querySelector('.nav-container')
    
window.addEventListener('load', () => {
    navBar.classList.remove('scrolled');
});

window.addEventListener('scroll',()=>{
    
    if(window.scrollY>50){
        navBar.classList.add('scrolled')
    }else{
        navBar.classList.remove('scrolled')
    }
    }
    )