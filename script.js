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


// ========== Counter Animation ==========


function animateCounter(element, targetValue, duration) {
    const startTime = performance.now();
    
   
    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // تطبيق الـ easing
        const easedProgress = easeOutQuart(progress);
        const current = Math.round(easedProgress * targetValue);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = targetValue;
        }
    }
    
    requestAnimationFrame(update);
}

// تشغيل العدادات عند الظهور
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('iconsBanner');
    
    if (!section) return;
    
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !animated) {
            const counters = document.querySelectorAll('.icon-value');
            
            counters.forEach((counter, i) => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                
                if (isNaN(target)) {
                    console.error('Invalid target value:', counter.getAttribute('data-target'));
                    return;
                }
                
                // بداية من 0
                counter.textContent = '0';
                
                // تأخير بسيط بين العدادات
                setTimeout(() => {
                    animateCounter(counter, target, 2500);
                }, i * 150);
            });
            
            animated = true;
        }
    }, { 
        threshold: 0.3,
        rootMargin: '0px'
    });
    
    observer.observe(section);
});