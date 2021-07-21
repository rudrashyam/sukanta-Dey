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





        //  typing animation script


         var type = new Typed(".typing", {

            strings: ["Web Designer", " Web Developer", "Freelancer"],
            typeSpeed: 120,
            backSpeed:60,
            loop: true

         });




    var type = new Typed(".typing-2", {

            strings: ["Web Designer", " Web Developer", "Freelancer"],
            typeSpeed: 120,
            backSpeed:60,
            loop: true

         });









        //  owl carousel script
         $('.carousel').owlCarousel({
             margin:20,
             loop: true,
             autolayTimeOut: 2000,
             autoplayHoverPause: true,
             responsive:{
                 0:{
                     items:1,
                     nav: false

                 },
                 600:{
                    items:2,
                    nav: false
                    
                },
                1000:{
                    items:3,
                    nav: false
                    
                }
             }


         });

});
