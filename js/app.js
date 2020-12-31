
    let screenHeight = $(window).height();
    console.log(screenHeight);

    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition >= screenHeight-100){
            $(".side-nav").addClass("side-nav-scroll");
        }else{
            $(".side-nav").removeClass("side-nav-scroll");
            setActive("home");
        }
    });

    $(".navbar-toggler").click(function () {
        let result = $(".navbar-collapse").hasClass("show");
        console.log(result);
        if(result){
            $(".menu").removeClass("fa-close").addClass("fa-bars");
        }else{
            $(".menu").removeClass("fa-bars").addClass("fa-close");
        }
    });


    function setActive(current) {
        $(".nav-link").removeClass("current-section");

        $(`.nav-link[href='#${current}']`).addClass("current-section");
    };


    function navScroll() {
       let currentSection = $("section[id]");

       currentSection.waypoint(function (direction) {

          if(direction == "down"){
            let currentId = $(this.element).attr('id');
            console.log(currentId);
            setActive(currentId);
          }
          
       },{ offset:'150px' });

       currentSection.waypoint(function (direction) {

          if(direction == "up"){
            let currentId = $(this.element).attr('id');
            console.log(currentId);
            setActive(currentId);
          }
        
        },{ offset:'150px' });
      
    };


    navScroll();


    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animate__animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
      $('.pricing-slide').slick({
      arrows:false,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
      }
      },
      {
      breakpoint: 780,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
      },
      {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
      });


      $(window).on("load",function () {
          $(".loader-container").fadeOut(500,function () {
              $(".loader-container").remove();
          });
      });
