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







$(document).ready(function () {

    $(window).scroll(function () {

        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");

        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script

    $('.scroll-up-btn').click(function(){

        $('html').animate({scrollTop: 0});
    });







    // toggle menu/ navbar script
    $('.menu-btn').click(function () {

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
         });





    
