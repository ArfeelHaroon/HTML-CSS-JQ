$(".menu-btn").on("click", function(){
    $(".nav-list").toggleClass("d-none")
});

$(document).on("click", ".top-nav-close-btn", function(){
    $("header").addClass("d-none");
});

$(document).on("click", ".fa-mobile-screen", function(){
    // $("body").toggleClass("mw-50")
    $("body").css("display:none;");
});
$(document).on("click", ".fa-tablet", function(){
    $("body").toggleClass("mw-50")
});
$(document).on("click", ".fa-desktop", function(){
    $("body").toggleClass("mw-100")
});

$(document).on("click", ".overlay-container", function(){
   var img = $(this).find("img");
  var client =  img.data('client');
  var catagory =  img.data('catagory');
  var imageURL = img.attr("src");
  $("#client").html(client);
  $("#catagory").html(catagory);
  $(".model_img").attr("src", imageURL)
    $('#myModal').modal('show'); 
});


  var lastScrollTop = 0;
$(window).on("scroll", function() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $(".second-header").addClass("darkHeader");
        $(".logo img ").css("height", "1.5rem")
    }else{
        $(".second-header").removeClass("darkHeader");
        $(".logo img ").css("height", "2rem")

    }
    // alert("nk")
});

// change the color of nav link when click or scroll
  $(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 600, 'linear');
    });
 
    // Add active class to navigation link based on scroll position
    $(window).scroll(function () {
      var scrollPos = $(document).scrollTop();

      $('.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));

        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $('.nav-link').removeClass('active');
          currLink.addClass('active');
        } else {
          currLink.removeClass('active');
        }
      });
    });
  });
