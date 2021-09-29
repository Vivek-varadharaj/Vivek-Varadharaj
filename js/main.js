(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


 
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let form = document.getElementById("form");
let errorElement = document.getElementById("error");

var flag=0;

function checkit(){
    var regx = /^[a-zA-Z ]*$/;
    let check = name.value;
   
   if (name.value === "" || null  ){
       document.getElementById("noname").innerHTML = "Name required."
       name.style.borderColor="red"
       flag++;
   }
   else{
       document.getElementById("noname").innerHTML = ""
       name.style.borderColor="green"
   }
   if (regx.test(check)){
    // name.style.borderColor="green"
   }
   else{
    document.getElementById("noname").innerHTML = "Enter a valid name"
    name.style.borderColor="red"
    flag++;
   }
   
 }

  function checkit1(){
    let mail = email.value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (email.value === "" || null){
        flag ++;
        document.getElementById("noemail").innerHTML = "Email required."
        email.style.borderColor = "red"
    }
     if (regx.test (mail)){
        console.log(mail)
        document.getElementById("noemail").innerHTML = "Email valid."
        email.style.borderColor = "green"

    }
    else {
        flag ++;
        document.getElementById("noemail").innerHTML = "Email not valid."
        email.style.borderColor = "red"
    }
 }


 function checkit2(){

   if (subject.value === "" || null){
       
       document.getElementById("nosubject").innerHTML = "Subject required"
       subject.style.borderColor="red"
       flag ++;
   }
   else {
    document.getElementById("nosubject").innerHTML = ""
    subject.style.borderColor="green"
   }
   
 }

 function checkit3(){
    if (message.value === "" || null){
        flag ++;
        document.getElementById("nomessage").innerHTML = "Message required"
        message.style.borderColor="red"
    }

    else{
        document.getElementById("nomessage").innerHTML = ""
        message.style.borderColor="green"
    }
 }

 
form.addEventListener("submit", (e)=>{
    let flag = 0;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    
    let mail = email.value;
    // console.log(mail)
    

    if (name.value === "" || null){
        // document.getElementById("noname").innerHTML = "Name required."
        // name.style.borderColor="red"
        flag++;
    }
    else{
        document.getElementById("noname").innerHTML = ""
        // name.style.borderColor="green"
    }
    
    if (email.value === "" || null){
        flag ++;
        // document.getElementById("noemail").innerHTML = "Email required."
    }
     if (regx.test (mail)){
        // console.log(mail)
        // document.getElementById("noemail").innerHTML = "Email valid."
    }
    else {
        flag ++;
        // document.getElementById("noemail").innerHTML = "Email not valid."
    }

    if (subject.value === "" || null){
        flag ++;
        // document.getElementById("nosubject").innerHTML = "Subject required"
        
    }

   
    if ( flag===0){

        reload();
        // alert("Form submitted successfully")
      document.getElementById("submitted").innerHTML= "form submitted successfully"
    }

   if (flag>0){
       
       alert ("Please fill the form completely")
    e.preventDefault()

   }
           
  
})

function reload(){
    setTimeout(function() { window.location.reload(); }, 2000)
    
    
    
}

 
       
           