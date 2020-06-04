/* --------------------------------------------------------------------------------------

* Author    :  themesagar
* Theme     :  MARK LOPEZ - Personal Portfolio Html5 Template
* File      :  MARK LOPEZ main JS file
* Version   :  1.0
* Support  : support@themesagar.com

* ---------------------------------------------------------------------------------------- */


/*------------------------------------------------------------------------------------------*
* IMPORTS Jquery Plugins                                                                    *
*-------------------------------------------------------------------------------------------*/

//for PORTFOLIO section
import mixitup from 'mixitup';
import "magnific-popup";

//for MY SERVICES and TESTIMONIALS section
import 'owl.carousel';

/*------------------------------------------------------------------------------------------------------------------------------------


/* ---------------------------------------------------------------------------------------

01. Preloader

02. Scroll spy

03. Change Header background on scroll up/down

04. Smooth scroll on click links

05. Navbar slider (SMALL SCREEN)

06. Scroll reveal contents 

07. PORTFOLIO mixitup, magnific popup

08. MY SERVICE, TESTIMONIALS owl carousel

09. CONTACT ME, Send email using ajax

------------------------------------------------------------------------------------------ */


(function($){

    "use strict"

    var TOKLA = {};


    //--------------------------------------------------------------------------------------
    //  01. Preloader
    //---------------------------------------------------------------------------------------
            TOKLA.preloader = function(){                           
                //hide preloader icon
                $(".preloader .preloader-icon").fadeOut("slow", function(){
                    // slide left preloader div
                    $(".preloader").addClass("preloader-animate slideOutLeft fast").one("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function() { 
                        //==== home intro animation ======
                        $("header").addClass(" fadeIn slower");
                        $(".home h1").addClass(" flipInX slow");
                        $(".home p").addClass("slideInDown slower");
                        $(".home a").addClass("slideInUp");
                        $(".home .home-pic").addClass("slideInUp slower");
                        //============= END =========================
                    });
                });
            }


    //--------------------------------------------------------------------------------------------------
    //  02. scroll spy
    //---------------------------------------------------------------------------------------------------
            TOKLA.scrollSpy = function(){     
                //(Bootstrap's scroll spy, when scroll up/down it will add "active" class to the nav-link)                               
                $('body').scrollspy({
                    target: '.nav-container',
                    offset: 100
                });
            }


    //--------------------------------------------------------------------------------------------------
    //  03. Change Header background on scroll up/down
    //---------------------------------------------------------------------------------------------------
            TOKLA.changeHeaderBG = function(){                                                           
                var header = $('header');
                if ($(window).scrollTop() > 50) {
                    header.addClass('bg-white shadow-sm');
                } else {
                    header.removeClass('bg-white shadow-sm');
                }                
            }


    //--------------------------------------------------------------------------------------------------
    //  04. Smooth scroll on click links
    //---------------------------------------------------------------------------------------------------
            TOKLA.smoothScroll = function(){
                $("a").on('click', function(event) {
                    // condition
                    if (this.hash !== "") {
                        // Prevent default anchor click behavior
                        event.preventDefault();
                        // Store hash
                        var hash = this.hash;
                        // The number (600) specifies the number of milliseconds it takes to scroll to the specified area
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, 600, function(){
                            // Add hash value to URL when done scrolling (default click behavior)
                            window.location = hash;     
                        });
                    }
                });                               
            }


    //--------------------------------------------------------------------------------------------------
    //  05. Navbar slider (SMALL SCREEN)
    //---------------------------------------------------------------------------------------------------
            TOKLA.navbarSlider = function(){               
                $(".burger-container").on("click", function () {                    
                    //Burger icon open/close
                    burgerIconToggle();
                    //Navigation menu slide in/out
                    navToggle();
                });
            
                //Burger icon open/close
                function burgerIconToggle() {
                    $(".burger-line").toggleClass("active-burger-line");
                }
                    
                //Navigation menu slide in/out
                function navToggle() {
                    //element
                    var $this = $(".nav-container");
                    var $thisList = $(".nav-item");   
                    //check class             
                    var isSlideIn = $this.hasClass("slideInRight");
                    //condition
                    if (isSlideIn){
                        $this.addClass("slideOutRight");
                        $this.removeClass("slideInRight");
                        //animate nav list item
                        $thisList.each(function(){
                            $(this).removeClass(" slideInRight");
                        });           
                    }else{
                        $this.removeClass("slideOutRight");
                        $this.addClass("slideInRight");
                        //animate list item
                        $thisList.each(function(index, elem){
                            var animationDelay = "."+index+"s";
                            $(elem).addClass(" slideInRight");
                            $(elem).css("animation-delay", animationDelay);
                        });
                    }
                    
                    // //add basic slidein/out classe to the element
                    $this.addClass("active-nav-container ");
                    $this.toggleClass("nav-container-border");
                    $thisList.addClass("active-nav-item");
                
                }
                                
                // Close navbar even when click on navbar links or outside of navbar while navbar is on open state
                $("section, .nav-link").on("click", function () {
                    //selector
                    var $this = $(".nav-container");       
                    // var $thisList = $(".nav-container li");
                    //check if nav is opened
                    var isNavOpen = $this.hasClass("slideInRight");
                    //condition
                    if(isNavOpen) {
                        burgerIconToggle();
                        navToggle();
                    }       
                });                              
            }


    //--------------------------------------------------------------------------------------------------
    //  06. Scroll reveal contents 
    //---------------------------------------------------------------------------------------------------
            TOKLA.scrollReveal = function(){  
                //ABOUT section 
                    //content reveal
                    $("#about .animated").each(function(){
                        if (isScrolledIntoView($(this)) === true) {
                            $(this).addClass("slideInUp fast");                                
                        }
                    });  

                    // skills progress bar fill
                    $(".skill .skill-per").each(function(){
                        if (isScrolledIntoView(this) === true) {
                            //change width of the element based on the elemet's attribute "per"
                            $(this).css("width", $(this).attr("per"));
                        }
                    });  

                //EXPERIENCE section 
                    //content reveal
                    $("#experience .animated").each(function(){
                        if (isScrolledIntoView($(this)) === true) {
                            $(this).addClass("slideInUp");                                
                        }
                    });  

                // PORTFOLIO section
                    // content reveal
                    $("#portfolio .animated").each(function(){
                        if (isScrolledIntoView($(this)) === true) {

                            $(this).addClass(" slideInUp")
                        }
                    });

                // SERVICES section
                    //content reveal
                    $("#services .animated").each(function(){
                        if (isScrolledIntoView(this) === true) {
                            $(this).addClass(" slideInUp faster")
                        }
                    });

                // TESTIMONIALS section
                    //content reveal
                    $("#testimonials .animated").each(function(){
                        if (isScrolledIntoView(this) === true) {
                            $(this).addClass(" slideInUp faster")
                        }
                    });

                //BLOG section
                    //content reveal                    
                    $("#blog h1").each(function(){
                        if (isScrolledIntoView(this) === true) {
                            $(this).addClass(" bounce")
                        }
                    });
                    //content reveal 
                    $("#blog .card").each(function(){
                        if (isScrolledIntoView(this) === true) {
                            // animate all img
                            $(this).addClass(" slideInUp")
                        }
                    });

                // CONTACT section
                    //content reveal
                    $("#contact .animated").each(function(){
                        if (isScrolledIntoView(this) === true) {
                            $(this).addClass(" slideInUp faster")
                        }
                    });

                // Element position detect function 
                // checks if element is scrolled into view 
                function isScrolledIntoView(elem) {
                    //top scroll value
                    var winViewTop = $(window).scrollTop();
                    //bottom scroll value
                    var winViewBottom = winViewTop + $(window).height();   
                    var elemTop = $(elem).offset().top;                  
                    return ( (winViewBottom >= elemTop));      
                }                
            }


    //--------------------------------------------------------------------------------------------------
    // 07. PORTFOLIO mixitup, magnific popup
    //--------------------------------------------------------------------------------------------------
            TOKLA.portfolioMixitUpPopup = function(){ 
                var config = $('.portfolio-items');
                var mixer = mixitup(config);

                //popup image when click
                $('.item-popup').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 300, // don't foget to change the duration also in CSS
                        opener: function(element) {
                            return element.find('img');
                        }
                    }                            
                });                   
            }


    //--------------------------------------------------------------------------------------------------
    //  08. MY SERVICES, TESTIMONIALS owl-carousel                                                      
    //---------------------------------------------------------------------------------------------------
            TOKLA.carousel = function(){  
                //owl carousel condition
                if ( $( window ).width() > 992) {
                    //autoplay owl carousel
                    startCarouselAutoPlay();
                }else{
                    //stop autoplay carousel on small divices users will touch and swipe the items
                    stoptCarouselAutoPlay() ;
                }

                //function owl carousel for big screens
                function startCarouselAutoPlay() {        
                    $(".owl-carousel").owlCarousel({                                    
                        autoplay: true,
                        loop: true,
                        autoplayHoverPause: true,
                        smartSpeed: 400,
                        slideTransition: "linear",
                        autoplayTimeout: 5000,
                        
                        responsive: {
                            0: {
                                items:1
                            },
                            700: {
                                items:2
                            },
                            992: {
                                items:3
                            }
                        },
                    })
                }

                //function owl carousel for big screens
                function stoptCarouselAutoPlay() {          
                    $(".owl-carousel").owlCarousel({ 
                        autoplay: false, // if you want items to slide automatically on mobile device, set this to true. 
                        loop: true,                            
                        responsive: {
                            0: {
                                items:1
                            },
                            700: {
                                items:2
                            },
                        },
                    })
                }
            }


    //--------------------------------------------------------------------------------------------------
    //  09. CONTACT ME, Send email using ajax                                                            
    //---------------------------------------------------------------------------------------------------
            TOKLA.sendEmail = function(){   
                //input active background color
                $(".form-control").on("keyup", function (e) { 
                    var $this = $(this);
                    var $value = $this.val();
                    //condition
                    if ($value.length > 1) {
                        $(this).addClass("input-active");
                    }else{
                        $(this).removeClass("input-active");
                    }
                });


                //form
                var form = $('.contact-form');

                //send message (Ajax)
                $(form).on('submit', function(e) {
                    //disabled refreshing page on submit
                    e.preventDefault();
                    //disabled send button
                    $("#send-btn").attr("disabled", true);
                    //fade a little contact form
                    $(form).css("opacity", "0.5");

                    //form data
                    var formData = $(form).serialize();

                    // Submit the form using AJAX.                                   
                    $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: formData
                    })
                    //success
                    .done(function(response) {
                        // Set the success message text.
                        $("#submition-status").addClass("success slideInRight");
                        $("#server-response").text(response);
                        // Clear the form.
                        $('#name').val('');
                        $('#email').val('');
                        $('#message').val('');
                    })
                     //error   
                    .fail(function(data) {
                        // Set the success message text.
                        $("#submition-status").addClass("error slideInRight");
                        if (data.responseText !== '') {
                            $("#server-response").text(data.responseText);
                        } else {
                            $("#server-response").text('Oops! An error occured and your message could not be sent.');
                        }
                    });
                   
                });                                   
            }


    
    // Window on Load
    $(window).on("load", function(){
        TOKLA.preloader();
    });

    //Document ready
    $(document).ready(function(){
        $(this).scrollTop(0),// IMPORTANT - always set scroll postion top to "0" whenever page refress to work with "scrollReveal()" later
        TOKLA.carousel(),
        TOKLA.smoothScroll(),
        TOKLA.navbarSlider();      
    });

    //window sroll
    $(window).on("scroll", function(){       
        TOKLA.changeHeaderBG(),
        TOKLA.scrollSpy(),
        TOKLA.scrollReveal(),
        TOKLA.portfolioMixitUpPopup(),
        TOKLA.sendEmail();
    });

})(jQuery);