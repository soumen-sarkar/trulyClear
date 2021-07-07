
//navigation
$('.navbar-toggler').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('navigation-open');
});

$(document).on('click','.nav-item',function(){
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});
$(document).on('click', '.closeMenu', function(event){
      event.preventDefault();
      $( ".navbar-toggler" ).trigger( "click" );
 });

$('.beg').on('click', function(event) {
    $('.cartBackDrop').show();
    $('.cartView').toggleClass("show");

});
$('.cartClose').on('click', function(event) {
    $('.beg').trigger("click");
    $('.cartBackDrop').hide();
});

/*on scroll header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 250) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});


// plus minus faq
$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
});



// Add smooth scrolling to all links
  $(".navbar  a , .footerLink a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      //event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



// modal show
$("#vlModal").modal('show');



(function(window, $) {

  $(function() {

    $('.bannerInfo a, .headerTop a , .welcomeInfo a, .productContent a,.allReview a,.bInfo > a,.showAllRevewBtn a,.cartCount  a,.rA  a').on('click', function(event) {
      //event.preventDefault();
      var $btn = $(this),
        $div = $('<div/>'),
        btnOffset = $btn.offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      $div
        .css({
          height: $btn.height(),
          width: $btn.height(),
          top: yPos - ($div.height() / 2),
          left: xPos - ($div.width() / 2),
          background: $btn.data("ripple-color") || "#fff"
        });
      $btn.append($div);

      window.setTimeout(function() {
        $div.remove();
      }, 2000);
    });

  });

})(window, jQuery);