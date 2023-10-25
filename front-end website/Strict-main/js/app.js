$(function(){
    $(window).scroll(function(){
      let scroll = $(this).scrollTop()
      if(scroll > 600 ){
        $(".navbar-section").addClass("nav_bg_chang")
      }else{
        $(".navbar-section").removeClass("nav_bg_chang"),1000
      }

      if(scroll > 800){
        $(".back_to_top").fadeIn()
      }else{
        $(".back_to_top").fadeOut()

      }
    })
    $(".back_to_top").click(function(){
        $("html, body").scrollTop(0)

    })

    
})




// Jquery........


// Light box
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
// Veno Box
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});



// Wow function for annimation dely
new WOW().init();

