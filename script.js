const showBtn = document.querySelector('.navBtn');

const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){

    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    }
    else{
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
})



// light box

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// mixup

var mixer = mixitup('.container');

var mixer = mixitup(containerEl);

var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});


    
